let _data; // data from previous update

function draw_grid(data) {
    let width = 600;
    let height = 600;
    let grid_length = data.length;
    let width_cell = width / grid_length;
    let height_cell = height / grid_length;

    let canvas = document.getElementById("grid")
    if (canvas == null) {
        canvas = document.createElement('canvas');
        canvas.id = "grid";
        canvas.width = width;
        canvas.height = height;
        document.getElementsByTagName('body')[0].appendChild(canvas);
    }

    const context = canvas.getContext("2d");

    function draw_cells() {

        for (let i = 0; i < grid_length; i++) {
            for (let ii = 0; ii < grid_length; ii++) {
                if (_data && _data[i][ii] === color_for_cell(data[i][ii])) {
                    continue;
                }
                context.clearRect(i * width_cell, ii * height_cell, width_cell, height_cell);
                context.fillStyle = color_for_cell(data[i][ii]);
                context.fillRect(i * width_cell, ii * height_cell, width_cell, height_cell);

                // // Установите цвет границы ячейки
                // context.strokeStyle = "gray"; // Цвет границы
                // context.lineWidth = 0.08; // Ширина границы
                //
                // // Нарисуйте границу ячейки
                // context.strokeRect(i * width_cell, ii * height_cell, width_cell, height_cell);

            }
        }

    }

    draw_cells();
    if (!_data) {
        _data = [];
    }
    for (let i = 0; i < grid_length; i++) {
        _data[i] = [];
        for (let ii = 0; ii < grid_length; ii++) {
            _data[i][ii] = color_for_cell(data[i][ii]);
        }
    }
} // Отвечает за визуализацию текущего состояния сетки на холсте

function update_grid(data) {
    draw_grid(data);
} // Обновляет сетку, вызывая draw_grid с новыми данными.


color_for_cell = function (cell) {
    if (cell.has_ant()) {
        return cell.ant.has_food ? "rgb(159,248,101)" : "rgb(0,0,0)";
    } else if (cell.food > 0) {
        return "rgba(86,169,46," + Math.pow(cell.food / 10, 0.5) + ")";
    } else {
        if (cell.signal > 0) {
            let signal = cell.signal > 1 ? 1 : cell.signal;
            return "rgba(17,103,189," + cell.signal + ")";
        } else return "rgb(250,250,250)";
    }
} // Определяет цвет ячейки в зависимости от наличия муравья, его состояния и сигнала

// const opacity_for_signal = function (cell) {
//     return cell.has_ant() ? "1.0" : cell.signal;
// };


let grid_length = 50; // размер сетки | 150
const grid = [];
const temp_grid = [];  //  двумерные массивы, представляющие сетку и временную сетку для муравьев и еды.
// const population = []; // пустой массив для хранения информации о муравьях.
const max_ants_on_grid = 20; //  максимальное количество муравьев на сетке. | 100
const ms_between_updates = 33; // интервал обновления симуляции в миллисекундах.  | 33
let ants_out_of_nest = 0; //  счетчик муравьев, находящихся вне муравейника.

Math.to_radians = function (degrees) {
    return degrees * Math.PI / 180;
};
// конвертируют углы из градусов в радианы и обратно.
Math.to_degrees = function (radians) {
    return radians * 180 / Math.PI;
};

function Cell(i, ii) { // объект, представляющий ячейку на сетке. Содержит информацию о наличии муравья, количестве еды и сигнале.
    this.i = i;
    this.ii = ii;
    this.ant = null;
    this.food = 0;
    this.signal = 0;
    this.has_ant = function () {
        return !!this.ant;
        // return this.ant ? true : false;
    };
}

function Ant() { // конструктор для создания объектов муравьев. Содержит информацию о наличии еды, последнем сигнале и ориентации.
    this.has_food = false;
    this.last_signal = 0;
    this.orientation = Math.random() * 90;
}


function init_grids() { //  инициализирует сетку и временную сетку объектами ячеек и устанавливает начальное состояние.
    for (let i = 0; i < grid_length; i = i + 1) {
        grid[i] = [];
        temp_grid[i] = [];
        for (let ii = 0; ii < grid_length; ii = ii + 1) {
            grid[i][ii] = new Cell(i, ii);
            temp_grid[i][ii] = new Cell(i, ii);
        }
    }
}

function initialize_simulation() { //- инициализирует сетку, размещает еду и вызывает draw_grid для визуализации начального состояния.
    init_grids();
    place_food();
    draw_grid(grid.map(function (row) {
        return row.map(function (cell) {
            return cell;
        });
    }));
}

initialize_simulation();
setInterval(simulate_and_visualize, ms_between_updates); //запускает циклический вызов функции simulate_and_visualize
// для обновления симуляции и визуализации.
// let interval_id = setInterval(simulate_and_visualize, ms_between_updates);


function simulate_and_visualize() { // выполняет один временной шаг симуляции, включая перемещение муравьев,
    // проверку наличия еды и обнаружение сигнала.
    run_time_step();
    update_grid(grid.map(function (row) {
        return row.map(function (cell) {
            return cell;
        });
    }));
    logAntsState()
}
function logAntsState() {
    const tableBody = document.getElementById("antTableBody");
    // Очистить существующие строки в таблице
    tableBody.innerHTML = "";

    // Добавить строки на основе состояния муравьев
    for (let i = 0; i < grid_length; i++) {
        for (let ii = 0; ii < grid_length; ii++) {
            if (grid[i][ii].has_ant()) {
                const ant = grid[i][ii].ant;
                // console.log(`Ant at (${i}, ${ii}) - Has Food: ${ant.has_food}, Orientation: ${ant.orientation}`);
                const newRow = document.createElement("tr");
                newRow.innerHTML = `
                    <td>Ant at (${i}, ${ii})</td>
                    <td class="${ant.has_food ? 'has-food' : 'no-food'}">${ant.has_food}</td>
                    <td>${(ant.last_signal).toFixed(3)}</td>
                    <td>${(ant.orientation.toFixed(3))}</td>
                `;
                tableBody.appendChild(newRow);
            }
        }
    }
}

function place_food() {
    const center_i = Math.round(grid_length * 0.8);
    const center_ii = center_i;
    const max_distance = grid_length / 10;
    for (let i = center_i - max_distance; i <= center_i + max_distance; i++) {
        for (let ii = center_ii - max_distance; ii < center_ii + max_distance; ii++) {
            bounded_i = get_bounded_index(i);
            bounded_ii = get_bounded_index(ii);
            const distance = calc_distance(center_i, center_ii, bounded_i, bounded_ii);
            grid[i][ii].food = Math.round(10 - Math.pow(distance, 1.2)); // food level
        }
    }
} // размещает еду на сетке, исходя из центральной точки.

function run_time_step() {
    move_ants();
    check_for_food();
    sense_signal();
}

function sense_signal() {
    for (let i = 0; i < grid_length; i = i + 1) {
        for (let ii = 0; ii < grid_length; ii = ii + 1) {
            if (grid[i][ii].has_ant()) {
                grid[i][ii].ant.last_signal = grid[i][ii].signal;
            }
        }
    }
} // обновляет информацию о сигналах, которые муравьи чувствуют.

function move_ants() {
    for (let i = 0; i < grid_length; i = i + 1) {
        for (let ii = 0; ii < grid_length; ii = ii + 1) {
            if (grid[i][ii].has_ant()) {
                move_ant(i, ii);
            }
        }
    }
    // signal
    for (let i = 0; i < grid_length; i = i + 1) {
        for (let ii = 0; ii < grid_length; ii = ii + 1) {
            // adjust reference
            grid[i][ii].ant = temp_grid[i][ii].ant;
            if (grid[i][ii].has_ant() && grid[i][ii].ant.has_food) {
                bounded_i = get_bounded_index(i);
                bounded_ii = get_bounded_index(ii);
                const signal_strength = 1 - Math.pow(0.5, 1 / calc_distance(i, ii, bounded_i, bounded_ii));
                grid[bounded_i][bounded_ii].signal += signal_strength;
                // is the ant near the nest with food? drop food
                if (i < 5 && ii < 5) {
                    grid[i][ii].ant.has_food = false;
                }
            } else {
                grid[i][ii].signal *= 0.95;
            }
            if (grid[i][ii].signal < 0.05) {
                grid[i][ii].signal = 0;
            }
        }
    }
    move_ant_out_of_nest();
}

// move_ants(), move_ant_out_of_nest(), move_ant(i, ii) - функции для управления движением муравьев и сигналами.
function move_ant_out_of_nest() {
    const i = 0;
    const ii = 0;
    const new_coords = get_random_coordinates(i, ii);
    const j = new_coords[0];
    const jj = new_coords[1];
    if (!grid[j][jj].has_ant() && ants_out_of_nest < max_ants_on_grid) {
        grid[j][jj].ant = new Ant();
        temp_grid[j][jj].ant = grid[j][jj].ant;
        ants_out_of_nest++;
    }
}

function get_coords_from_orientation(i, ii) {
    const coords = [];
    const orientation_radians = Math.to_radians(grid[i][ii].ant.orientation);
    coords.push(get_bounded_index(Math.round(i + Math.cos(orientation_radians))));
    coords.push(get_bounded_index(Math.round(ii + Math.sin(orientation_radians))));
    return coords;
}

function move_ant(i, ii) {
    let new_coords, j, jj;
    if (grid[i][ii].ant.has_food) {
        const current_distance = calc_distance_to_nest(i, ii);
        do {
            grid[i][ii].ant.orientation = Math.random() * 360;
            new_coords = get_coords_from_orientation(i, ii);
            j = new_coords[0];
            jj = new_coords[1];
        } while (calc_distance_to_nest(j, jj) >= current_distance);
    } else {
        // random movement in case there is no signal
        new_coords = get_coords_from_orientation(i, ii);
        j = new_coords[0];
        jj = new_coords[1];
        grid[i][ii].ant.orientation += Math.random() * 45 - 22.5;
        // let's check for some signal
        const last = grid[i][ii].ant.last_signal;
        let current;
        const min = 0;
        const max = 0;
        for (let n_i = i - 1; n_i <= i + 1; n_i++) {
            for (let n_ii = ii - 1; n_ii <= ii + 1; n_ii++) {
                bounded_n_i = get_bounded_index(n_i);
                bounded_n_ii = get_bounded_index(n_ii);
                current = grid[bounded_n_i][bounded_n_ii].signal;
                if (current.signal === 0) {
                    continue;
                }
                const diff = last - current;
                if (last === 0) {
                    if (diff < min) {
                        j = bounded_n_i;
                        jj = bounded_n_ii;
                    }
                } else {
                    if (diff > max) {
                        j = bounded_n_i;
                        jj = bounded_n_ii;
                    }
                }
            }
        }
    }
    // some randomness
    if (Math.random() < 0.05) {
        new_coords = get_random_coordinates(i, ii);
        j = new_coords[0];
        jj = new_coords[1];
    }
    // now that we have new coords:
    if (!temp_grid[j][jj].has_ant()) {
        // adjust reference
        temp_grid[j][jj].ant = temp_grid[i][ii].ant;
        temp_grid[i][ii].ant = null;
    }
}

function calc_distance(i, ii, j, jj) {
    return Math.pow(Math.pow(Math.abs(i - j), 2) + Math.pow(Math.abs(ii - jj), 2), 0.5);
}
// calc_distance() и calc_distance_to_nest() - вычисляют расстояния между ячейками и до муравейника.
function calc_distance_to_nest(i, ii) {
    return calc_distance(i, ii, 0, 0);
}

function get_random_coordinates(i, ii) {
    let j = get_random_int(i - 1, i + 1);
    let jj = get_random_int(ii - 1, ii + 1);
    j = get_bounded_index(j);
    jj = get_bounded_index(jj);
    return [j, jj];
} // енерирует случайные координаты для движения муравья.

function check_for_food(i, ii) {
    for (i = 0; i < grid_length; i = i + 1) {
        for (ii = 0; ii < grid_length; ii = ii + 1) {
            if (grid[i][ii].has_ant() && !grid[i][ii].ant.has_food) {
                if (grid[i][ii].food > 0) {
                    grid[i][ii].ant.has_food = true;
                    grid[i][ii].food--;
                }
            }
        }
    }
} // проверяет, есть ли еда рядом с муравьями, и если да, то муравьи начинают ее собирать.


function get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} //  генерирует случайное целое число в заданном диапазоне.

function get_bounded_index(index) {
    let bounded_index = index;
    if (index < 0) {
        bounded_index = 0;
    }
    if (index >= grid_length) {
        bounded_index = grid_length - 1;
    }
    return bounded_index;
} // ограничивает индекс, чтобы он не выходил за границы сетки.
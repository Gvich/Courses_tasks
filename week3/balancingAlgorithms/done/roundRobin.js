const ads = [
    {name: 'ad1', price: 1.8, show: 3},
    {name: 'ad2', price: 1.55, show: 2},
    {name: 'ad3', price: 1.13, show: 1},
    {name: 'ad4', price: 0.48, show: 4},
];

let currentIndex = 0;
const roundRobin = banners => {
    // console.log(banners[currentIndex].name)
    banners[currentIndex].show++;
    currentIndex = (currentIndex + 1) % banners.length;
}

function* roundRobing2 (banners) {
    let currentIndex = 0;

    while (true) {
        yield banners[currentIndex].show++;
        currentIndex = (currentIndex + 1) % banners.length;
    }
}
const roundRobinAlgorithm = roundRobing2(ads)

class RoundRobin3 {
    constructor(ad) {
        this.ad = ad;
        this.currentIndex = 0;
    }

    getNextTask() {
        const currentTask = this.ad[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.ad.length;
        return currentTask.show++;
    }
}
const ad = new RoundRobin3(ads);


function spreadTrafficEvently_SHIFT_PUSH(banners) {
    const ad = banners.shift();
    ad.show++;
    banners.push(ad);
} // like RoundRobin????

function spreadTrafficEvently (banners, users) {
    let j = 0;

    for (let i = 0; i < users; i++) {
        if (j < banners.length) {
            banners[j++].show++;
        } else {
            j = 0;
            banners[j++].show++;
        }
    }
} // like RoundRobin????
// spreadTrafficEvently(ads, 1000000);

function spreadTrafficEvently2 (banners, users) {
    for (let i = 0; i < users; i++) {
        banners[i % banners.length].show++;
    }
} // like RoundRobin????
// spreadTrafficEvently2(ads, 1000000);



console.time('Время выполнения');
for (let user = 1; user <= 1000000; user++) {
    // roundRobin(ads)
    // const ad = roundRobinAlgorithm.next().value;
    // ad.getNextTask()
    spreadTrafficEvently_SHIFT_PUSH(ads)
}
console.timeEnd('Время выполнения');
console.log(ads);





// class RoundRobinScheduler {
//     constructor(tasks) {
//         this.tasks = tasks;
//         this.currentIndex = 0;
//     }
//
//     getNextTask() {
//         const currentTask = this.tasks[this.currentIndex];
//         this.currentIndex = (this.currentIndex + 1) % this.tasks.length;
//         return currentTask;
//     }
// }
//
// const tasks = ['Task A', 'Task B', 'Task C', 'Task D'];
// const scheduler = new RoundRobinScheduler(tasks);
//
// console.time('Время выполнения');
// for (let i = 1; i <= 10; i++) {
//     const nextTask = scheduler.getNextTask();
//     console.log(`Шаг ${i}: Выполнение задачи - ${nextTask}`);
// }
// console.timeEnd('Время выполнения');

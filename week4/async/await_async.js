/*
console.log("Starting");
let image;

fetch("coffee.jpg")
    .then((response) => {
        console.log("It worked :)");
        return response.blob();
    })
    .then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob);
        image = document.createElement("img");
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch((error) => {
        console.log(
            "There has been a problem with your fetch operation: " + error.message,
        );
    });

console.log("All done!");*/

/////////////////////////////////////////////////

// async function hello () {
//     return "hello"
// }
// // const hello = async () => { // arrow function
// //     return "Hello";
// // };
//
// console.log(hello()) // Promise { 'hello' } // type - object
// hello().then(value => console.log(value)) // hello // type - string
// hello().then(console.log) // hello


/*async function myFetch() {
    const response = await fetch("https://api.unsplash.com/photos/random/?client_id=Mo9m6pTtP1yOPtESG6KA70wEr4pAtoBemhLbhNx4Gpo")

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        // const myBlob = await response.blob();

        // const objectURL = URL.createObjectURL(myBlob);
        const data = await response.json();
        const image = document.createElement("img");
        image.src = data.urls.regular;

        document.body.appendChild(image);
    }
}

myFetch().catch((e) => {
    console.log(
        "There has been a problem with your fetch operation: " + e.message,
    );
})*/

/////////////////////
/*async function myFetch() {
    const response = await fetch("coffee.jpg");
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.blob();
    }
}

myFetch()
    .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        const image = document.createElement("img");
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch((e) => console.log(e));*/
//////////////////////////////////


/*async function myFetch() {
    try {
        const response = await fetch("coffee.jpg");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const myBlob = await response.blob();
            const objectURL = URL.createObjectURL(myBlob);
            const image = document.createElement("img");
            image.src = objectURL;
            document.body.appendChild(image);
        }
    } catch (e) {
        console.log(e);
    }
}

myFetch();*/


/*async function myFetch() {
    const response = await fetch("coffee.jpg");
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return await response.blob();
    }
}

myFetch()
    .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        const image = document.createElement("img");
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch((e) => console.log(e));*/
////////////////////////////////


// async function fetchAndDecode(url, type) {
//     const response = await fetch(url);
//
//     let content;
//
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     } else {
//         if (type === "blob") {
//             content = await response.blob();
//         } else if (type === "text") {
//             content = await response.text();
//         }
//
//         return content;
//     }
// }

// async function displayContent() {
//     const coffee = fetchAndDecode("coffee.jpg", "blob");
//     const tea = fetchAndDecode("tea.jpg", "blob");
//     const description = fetchAndDecode("description.txt", "text");
//
//     const values = await Promise.all([coffee, tea, description]);
//
//     const objectURL1 = URL.createObjectURL(values[0]);
//     const objectURL2 = URL.createObjectURL(values[1]);
//     const descText = values[2];
//
//     const image1 = document.createElement("img");
//     const image2 = document.createElement("img");
//     image1.src = objectURL1;
//     image2.src = objectURL2;
//     document.body.appendChild(image1);
//     document.body.appendChild(image2);
//
//     const para = document.createElement("p");
//     para.textContent = descText;
//     document.body.appendChild(para);
// }
//
// displayContent().catch((e) => console.log(e));


///// frecodecamp async tutorial


let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}

// 1st Function

let order = (fruit_name, call_production) => {

    setTimeout(function () {

        console.log(`${stocks.Fruits[fruit_name]} was selected`)

        // Order placed. Call production to start
        call_production();
    }, 2000)
};

// 2nd Function

let production = () => {
    setTimeout(() => { /////// call back hell!
        console.log("production has started")
        setTimeout(() => {
            console.log("The fruit has been chopped")
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(() => {
                    console.log("start the machine")
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.holder[1]}`)
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} as toppings`)
                            setTimeout(() => {
                                console.log("serve Ice cream")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0)
};

// Trigger 👇
// order(0, production);


let is_shop_open = true;

let order2 = (time, work) => {

    return new Promise((resolve, reject) => {

        if (is_shop_open) {

            setTimeout(() => {
                // work is 👇 getting done here
                resolve(work())
                // Setting 👇 time here for 1 work
            }, time)

        } else {
            reject()
            console.log('Our shop is closed')
        }

    })
}

// step 1
/*order2(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    // step 2
    .then(() => {
        return order2(0, () => console.log('production has started'))
    })

    // step 3
    .then(() => {
        return order2(2000, () => console.log("Fruit has been chopped"))
    })

    // step 4
    .then(() => {
        return order2(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
    })

    // step 5
    .then(() => {
        return order2(1000, () => console.log("start the machine"))
    })

    // step 6
    .then(() => {
        return order2(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
    })

    // step 7
    .then(() => {
        return order2(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
    })

    // Step 8
    .then(() => {
        return order2(2000, () => console.log("Serve Ice Cream"))
    })
    .catch(() => {
        console.log('customer left')
    })
    .finally(() => {
        console.log("end of day")
    })*/


// function toppings_choice (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//
//             resolve( console.log("which topping would you love?") )
//
//         },3000)
//     })
// }
//
// async function kitchen(){
//
//     console.log("A")
//     console.log("B")
//     console.log("C")
//
//     await toppings_choice()
//
//     console.log("D")
//     console.log("E")
//
// }
//
// // Trigger the function
//
// kitchen();
// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking orders")

function time(ms) {

    return new Promise( (resolve, reject) => {

        if(is_shop_open){
            setTimeout(resolve,ms);
        }

        else{
            reject(console.log("Shop is closed"))
        }
    });
}
async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0)
        console.log("production has started")

        await time(2000)
        console.log("fruit has been chopped")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)

        await time(2000)
        console.log("Serve Ice Cream")
    }

    catch(error){
        console.log("customer left")
    }
}

kitchen()
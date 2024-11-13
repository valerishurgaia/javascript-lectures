

// function konosoli() {
//     console.log("number1");

// }

// let interval1 = setInterval(konosoli, 1000)

// console.log("number2");
// console.log("number3");


// let promise = new Promise(function(resolve , reject) {
//     let result = 1 + 10

//     if(result === 3) {
//         resolve("შესრულდა")
//     } else {
//         reject("ვერ შესრულდა")
//     }
// })

// promise.then((message) => { 
//     console.log(message)})
// .catch((error) => {
//     console.error(error);
// })


// let xachapuri = new Promise((res , rej) => {
//     let ingredients = [ 'yveli' , 'margarini']

//     if(
//         ingredients.includes("comi") 
//         && ingredients.includes("yveli") 
//         && ingredients.includes("margarini")
//     ) 
//     {
//         res("ხაჭაპური მზადაა")
//     } else {
//         rej("ინგრედიენტები გვაკლია!")
//     }
// })

// xachapuri.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error)
// }).finally(() => {
//     console.log("საბოლოოდ რესტორანი იხურება 12 საათზე");
// })


let promise1 = new Promise((res, rej) => {
    setTimeout(() => res("ვერ შესრულდა პირველი ფრომისი: promise1"), 2000)
})

let promise2 = new Promise((res, rej) => {
    setTimeout(() => res(" შესრულდა მეორე ფრომისი: promise2"), 1000)
})

let promise3 = new Promise((res, rej) => {
    setTimeout(() => rej("შესრულდა მესამე ფრომისი: promise3"), 3000)
})

// Promise.all([promise1 , promise2, promise3]).then((message) => {
//     console.log("შესრულდა ყველა ფრომისი promise.all");
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
//     console.error("ვერ შესრულდა ერთ ერთი მათგანი promise.all");
// })

Promise.race([promise1 , promise2 , promise3]).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})



// რიცხვის შემოწმება დაპირებით
// შექმენი დაპირება, რომელიც მიიღებს რიცხვს. თუ რიცხვი 10-ზე მეტია, დაპირება უნდა შესრულდეს (resolve) და დააბრუნოს ტექსტი "რიცხვი საკმარისად დიდია". წინააღმდეგ შემთხვევაში, დაპირება უარყოფილი უნდა იყოს (reject) ტექსტით "რიცხვი მცირეა".


let promise = new Promise((res , rej) => {
    let number = 12

    if (number > 10 ) {
        res("მეტია ათზე")
    } else {
        rej("ნაკლებია ათზე")
    }
})


promise.then((message) => {
        console.log(message);
}).catch((error) => {
    console.error(error);
})
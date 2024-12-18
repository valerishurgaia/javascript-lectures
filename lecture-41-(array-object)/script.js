

//  მასივიდან ბოლო ელემენტის წაკითხვა
// console.log("ბოლო" , fruits[fruits.length - 1])  
// console.log("ბოლო" , fruits.pop())

//მასივიდან პირველი ელემენტის წაკითხვა
// console.log("პირველი" , fruits[0])
// console.log("პირველი" , fruits.shift())

//მასავიში ელემენტის დამატება (თავში)
// fruits.unshift("watemalone")
// console.log(fruits)


// მასივში ელემენტის დამატება (ბოლოში) 
// fruits.push("potato")
// console.log(fruits)

// მასივში ელემენტის შემოწმება
// console.log(fruits.find((fruit) => fruit === "apple" ));

//for loop

// for(let i = 0 ; i < fruits.length ; i++ ) {
//     console.log(fruits[i])
// }
// let newArr = []
// for(let i = 0 ; i < fruits.length ; i++ ) { 
    
//     let uppercaseFruit = fruits[i].toLocaleUpperCase()
//     newArr.push(uppercaseFruit)

// }

// console.log(newArr)

//array methods

// let filteredArr = fruits.filter((element) => element.length < 6 )
// console.log(filteredArr)

// let newArr = []
// for(let i = 0 ; i < fruits.length ; i++ ) { 
//     if(fruits[i].length < 6) {
//         newArr.push(fruits[i])
//     }
// }

// console.log(newArr)

//მასივების გაერთიანება
// console.log(fruits.concat(fruits))

// const fruits = ["apple" , "grape" , "banana" , "strawberry"]

// let string = "prezidenti"

// console.log(string.split(""))

// const numbers = [1 , 10 , 13 , 17]


// numbers.forEach((element , i) => {
//     return numbers[i] += 1
// })

// let newArr = numbers.map((num) => num + 1)

// console.log(newArr)

// numbers.map((fruit) => {

// })


//სპრედ ოპერატორი

// let user = {
//     age : 16,
//     name :"sandro",
//     status : true
// }

// let newObj = {...user , city : "tbilisi" }

// console.log(user)

// console.log(newObj)


let arr = [{usename : "daviti" , age : 16} , {usename : "sandro" , age : 20} , {usename : "luka" , age : 50}]

// let filteredArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     if (element.age > 20) {
//         filteredArr.push(element)
//     }    
// }

// console.log(filteredArr)

// let filteredArr1 = arr.filter((user) => user.age > 20 )
// console.log(filteredArr1)


// let filteredArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     element.age >= 18 ? filteredArr.push({...element , adult : true}) : filteredArr.push({...element , adult : false})

//     // if (element.age >= 18) {
//     //     filteredArr.push({...element , adult : true})
//     // } else {
//     //     filteredArr.push({...element , adult : false})
//     // }
// }

// console.log(filteredArr)

// let sityva = "javascript"

// console.log(sityva.includes("g"))
// console.log(sityva.charAt(6))

// let numbers = [4 , 6 , 19 , 20]

// let result =  numbers.reduce((total , current) => {
// return total += current
// }, 0)

// let total1= 0

// for(let i = 0 ; i < numbers.length ; i++) {
//     total1 += numbers[i]
// }

// console.log(total1)

// console.log(result)
let i = 0


// let interval = setInterval(() => {
//     i++
//     console.log(i)
//     if (i === 3 ) {
//         clearInterval(interval)
//     }
// }, 1000)

setTimeout(() => {
    console.log("hello")
}, 2000)
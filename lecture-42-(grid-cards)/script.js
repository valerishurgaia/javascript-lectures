// let word = "javascript"

// let reversedWord = ""

// for(let i = word.length - 1 ;  i >= 0 ; i--) {
//     reversedWord + word[i]
// }

// console.log(reversedWord)


// console.log(word.split("").reverse().join(""))

// let user = {
//     age : 17,
//     city : "tbilisi",   
// } 

// let newUser = { 
//     name : "daviti"  ,
//     ...user
// }


// localStorage.setItem("user" , JSON.stringify(newUser));


// setTimeout(() => {
//     let user = JSON.parse(localStorage.getItem("user"))
//     console.log(user.name)
//     console.log(user.age)
// }, 3000)


let products = [
    {
        id : 1 ,
        name : "apple",
        price : "1.10$",
        descritpion : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur numquam hic beatae ea? Blanditiis quas minima adipisci placeat, quos assumenda natus id necessitatibus odio distinctio sequi corporis! Adipisci, esse?"
    },
    {
        id : 2 ,
        name : "milk",
        price : "3.10$",
        descritpion : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur numquam hic beatae ea? Blanditiis quas minima adipisci placeat, quos assumenda natus id necessitatibus odio distinctio sequi corporis! Adipisci, esse?"
    },
    {
        id : 3 ,
        name : "bread",
        price : "2.10$",
        descritpion : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur numquam hic beatae ea? Blanditiis quas minima adipisci placeat, quos assumenda natus id necessitatibus odio distinctio sequi corporis! Adipisci, esse?"
    },
    {
        id : 4 ,
        name : "egg",
        price : "1.00$",
        descritpion : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur numquam hic beatae ea? Blanditiis quas minima adipisci placeat, quos assumenda natus id necessitatibus odio distinctio sequi corporis! Adipisci, esse?"
    },
    {
        id : 5 ,
        name : "water",
        price : "0.70$",
        descritpion : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur numquam hic beatae ea? Blanditiis quas minima adipisci placeat, quos assumenda natus id necessitatibus odio distinctio sequi corporis! Adipisci, esse?"
    }
]

let gridContainer = document.getElementById("gridContainer")

products.forEach((product , i) => {
    let itemDiv = document.createElement("div")
    let itemName = document.createElement("h1")
    let itemPrice = document.createElement("p")
    let itemImg = document.createElement("img")
    let itemClassName = "item" + (i + 1)

    itemName.textContent = product.name
    itemPrice.textContent = product.price

    itemDiv.classList.add(itemClassName)
    itemDiv.classList.add("item")
    itemImg.classList.add("itemImg")

    itemDiv.append( itemImg, itemName ,  itemPrice)

    gridContainer.appendChild(itemDiv)

})
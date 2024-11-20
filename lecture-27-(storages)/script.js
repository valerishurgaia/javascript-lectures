// let button = document.getElementById("btn")


// button.addEventListener("click" , () => {
//     // localStorage.removeItem("name")
   
// })

// let stundent = {
//     name : "valeri",
//     age : 23
// }

// localStorage.setItem("name" , JSON.stringify(stundent))


// let object = JSON.parse(localStorage.getItem("name"))

// console.log(localStorage.getItem("name"))

// console.log(object)

// let nameP = document.createElement("p")
// let ageP = document.createElement("p")

// nameP.textContent = " სახელი: " +  object.name
// ageP.textContent = " ასაკი: " +  object.age

// document.body.append(nameP , ageP)



// let task = localStorage.getItem("task")

// if(task) {
//     createHtmlContent(task)
// }

// form.addEventListener("submit" , (e) => {
//     e.preventDefault()
//     // console.log(task)
//     localStorage.setItem("task" , taskInput.value )
    
//     let task = localStorage.getItem("task")
//     createHtmlContent(task)
// })

// let masivi = ["პირველი თასქი" , " მეორე თასქი"]


// function createHtmlContent(task) {
//     let li = document.createElement("li")

//     li.textContent = task

//     tasksUl.appendChild(li)
// }



const form = document.getElementById("form")
const taskInput = document.getElementById("taskInput")
const tasksUl = document.getElementById("tasksUl")

let todos = [
    {
        id : 1,
        task : "უნდა შევიჭრა თმა",
        ischecked : false
    }
]

form.addEventListener("submit" , (e) => {
    e.preventDefault()
    todos.push(taskInput.value)
    // console.log(todos)
    createHtmlContent(todos)
    console.log(todos)
})


function createHtmlContent(tasks) {
    tasksUl.innerHTML = ""
    tasks.map((task) => {
        let li = document.createElement("li")

        li.textContent = task
    
        tasksUl.appendChild(li)
    })
}

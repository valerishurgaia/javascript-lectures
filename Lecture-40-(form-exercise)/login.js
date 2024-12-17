const form = document.getElementById("form")
const emailInput = document.getElementById("email")
const passworInput = document.getElementById("password")
const mainH1 = document.getElementById("mainH1")

const error = document.getElementById("errorText")

const user = JSON.parse(localStorage.getItem("user"))


form.addEventListener("submit" , (e) => {
    e.preventDefault();

    if(user.email === emailInput.value && user.password === passworInput.value) {
        error.textContent = ""
        mainH1.textContent = `${user.firstName}  ${user.lastName}`
    } else {
        console.log(error)
        error.textContent = "ავტორიზაცია ვერ გაიარეთ!"
    }
})

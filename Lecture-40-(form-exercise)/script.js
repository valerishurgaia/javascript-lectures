const form = document.getElementById("form")
const firstNameInput = document.getElementById("name")
const lastNameInput = document.getElementById("lastName")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

const firstNameError = document.getElementById("nameError")
const lastNameError = document.getElementById("lastNameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")

const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


form.addEventListener("submit", (e) => {
    e.preventDefault()

    firstNameError.textContent = ""
    lastNameError.textContent = ""
    emailError.textContent = ""
    passwordError.textContent = ""

    firstNameInput.style.border = "1px solid gainsboro"
    lastNameInput.style.border = "1px solid gainsboro "
    emailInput.style.border = "1px solid gainsboro"
    passwordInput.style.border = "1px solid gainsboro"

    let isValidated = true

    
    if(firstNameInput.value.trim() === ""  ) {
        firstNameInput.style.border = "1px solid red"
        firstNameError.textContent = "სავალდებულო ველი!"
        isValidated = false
    }

    if(lastNameInput.value.trim() === ""  ) {
        lastNameInput.style.border = "1px solid red"
        lastNameError.textContent = "სავალდებულო ველი!"
        isValidated = false

    }

    if (!emailValidation.test(emailInput.value)) {
        emailInput.style.border = "1px solid red"
        emailError.textContent = "შეიყვანეთ სწორი ელ-ფოსტა!"
        isValidated = false

    }

    if (!passwordValidation.test(passwordInput.value)) {
        passwordInput.style.border = "1px solid red"
        passwordError.textContent = "შეიყვანეთ რთული პაროლი!"
        isValidated = false

    }

    if (isValidated) {
        const user = {
            firstName : firstNameInput.value,
            lastName : lastNameInput.value,
            email : emailInput.value,
            password : passwordInput.value,
        }
        localStorage.setItem("user" , JSON.stringify(user))

        window.location.href = "login.html"
    }
})
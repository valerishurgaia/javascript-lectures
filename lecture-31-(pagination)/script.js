let prevBtn = document.getElementById("prevBtn")
let nextBtn = document.getElementById("nextBtn")
let productsList = document.getElementById("productList")
let pageText = document.getElementById("pageText")

const limit = 10
let currentPage = 1
let totalPages 
let totalProducts 

async function fetchData() {
    const skip = (currentPage - 1) * limit
    try {
        const res = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
        const data = await res.json()
        console.log(data)

        totalProducts = data.total
        totalPages = Math.ceil(totalProducts / limit)

        createHtmlContent(data.products)
        updatePageText()
        updateBtnState()
    } catch (error) {
        console.log(error)
    }
}
fetchData()

function createHtmlContent(data) {
    productsList.innerHTML = ""
    data.forEach((product) => {
        let productLi =document.createElement("li")

        let productImg = document.createElement("img")
        let productTitle = document.createElement("p")

        productTitle = product.title
        productImg.src = product.images[0]
        productImg.style.width = "100px"

        productLi.append(productImg , productTitle)

        productsList.appendChild(productLi)
        
    })
}

function updatePageText() {
    pageText.textContent = `Page ${currentPage} of ${totalPages}`
}

function updateBtnState() {
    prevBtn.disabled = currentPage === 1
    nextBtn.disabled = currentPage === totalPages
}



prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--
        fetchData();
    }
})

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++
        fetchData();
    }
})

window.addEventListener("keydown", (e) => {
    console.log(e.key)

    if(e.key === "ArrowRight" && currentPage < totalPages) {
        currentPage++
        fetchData();
    }

    if(e.key === "ArrowLeft" && currentPage > 1) {
        currentPage--
        fetchData();
    }
})
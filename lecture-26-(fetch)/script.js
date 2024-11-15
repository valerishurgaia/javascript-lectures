// let promise = new Promise((res , rej) => {
//     let result = 2 + 3

//     if(result === 5) {
//         res(შესრულდა)
//     } else {
//         rej("ვერ შესრულდა")
//     }
// })

// promise.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("finally");
// })


function getData (arr) {
    arr.map((post) =>{
        let p = document.createElement("p")
        
        p.innerText = post.title
        
        document.body.appendChild(p)
    })
    
}
// fetch("https://jsonplaceholder.typicode.com/posts", {method : "GET"}).then((res) => {
//    return res.json()
// }).then((data) => {
//     getData(data)
// })

// async function fetchPosts() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/photos");
//         let data = await response.json()
//         console.log(data);
//         // getData(data)
//     } catch(error) {
//         console.log(error);
//     }

// }

// fetchPosts();
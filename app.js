// // // const obj = {
// // //     name: 'Alex',
// // //     age: 21
// // // }


// // const arr = [1, 2, 3, 4 ]
// // // console.log(obj)
// // console.log(arr)


// // // const data = JSON.stringify(obj)
// // const data = JSON.stringify(arr)

// // console.log(data, "stringify")

// // console.log(JSON.parse(data), "parse")

// // {
// //     img: '../',
// //     title: "",
// //     descroption: "",
// //     price: 20
// // }


// string number bool undef null - primitive 
// obj arr - obj 


// const num = 5
// console.log(num)

// const num2 = num + 10
// console.log(num2)


// const obj = {
//     name: 'Alex',
//     id: 1
// }

// const obj2 = { ...obj }
// obj2.name = 'John'
// obj2.age = 25


// console.log(obj, "1")
// console.log(obj2, "2")


// const [one, ...two] = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(one)
// console.log(two)

// const [one, ...two] = "qwe rty sasd fgh"

// console.log(one)
// console.log(two)

const wrapper = document.querySelector(".wrapper")
 
const getData = () => {
    const request = new XMLHttpRequest() 
      request.open("GET", "data.json")
      request.setRequestHeader("Content-Type", "application/json") 
      request.send() 
        request.addEventListener("load", () => {
          const data = JSON.parse(request.response)
          console.log(data);
          data.map((item) => {
            const div = document.createElement('div')
           console.log(item.title);
           const image = document.createElement('img')
           image.src = item.img;
           image.classList.add('cardImage')
           let title = document.createElement('h2')
           title.innerText = item.title;
           let desc = document.createElement('p')
           desc.innerHTML = item.description
           let price = document.createElement('h4')
           price.innerText = 'Цена: '+item.price + " сом"
           div.append(title, desc, image, price)
            wrapper.append(div)
          })
})
}
    
getData()
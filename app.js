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
           let title = document.createElement('h3')
           title.innerText = item.title;
           div.append(image,title)
            wrapper.append(div)
          })
})
}
    
getData()
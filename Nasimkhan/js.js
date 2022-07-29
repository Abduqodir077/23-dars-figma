const data =[
    {
        img: "./img/rice image.png",
        nomi: "Rice and Biryani"
    },
    {
        img: "./img/healthy image.png",
        nomi: "Healthy",
    },
    {
       img:"./img/paneer image.png",
       nomi: "Paneer",
    },
    {
       img:"./img/pizza image.png",
       nomi:"Pizzaaaaaa" 
    },
    {
        img:"./img/dessert image.png",
        nomi: "pizzaaaa"
    },
    {
        img:"./img/fastfood image.png",
        nomi:"Fast Food"
    }

]
let searchInput = document.querySelector("#search");
let section2 =document.querySelector(".section_2");
let madal = document.querySelector(".madal");
let modal = document.querySelector(".modal");
let body = document.querySelector("body")
data.forEach((item) =>{
    section2.innerHTML += `
    <div class="column">
        <img src="${item.img}">
        <p>${item.nomi}</p>
    </div>
    
    `

})


searchInput.addEventListener('input', e => {
    
    if(searchInput.value.length == 0){
        modal.style.display = "none"
    } else if(searchInput.value.length > 0){
        modal.style.display = "block"
        // body.style.background = 
    }

    const element = e.target.value.toLowerCase()

    const searchFunc = data.filter(data => {
        return data.nomi.toLowerCase().includes(element)
    }
    )
  
    viewResults(searchFunc)
})

const viewResults = (arr) => {
    let output = "";

    arr.forEach(({
        img,
        nomi
    }) => (output += `
            <div class="results">
                <img src="${img}"> 
                <p> ${nomi} </p>
            </div>
   
    `));
    madal.innerHTML = output;
}
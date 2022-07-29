let sec2 = document.querySelector(".sec1_img_2");
let sec1 = document.querySelector(".sec1_img_1");
let sec3 = document.querySelector(".sec1_img_3");

sec2.addEventListener("click", function(){
    sec2.style.transform='translateX(-104%)'
    sec1.style.transform='translateX(-104%)'
    sec3.style.transform='translateX(-104%)'
})
sec3.addEventListener("click", function(){
    sec2.style.transform='translateX(-208%)'
    sec1.style.transform='translateX(-208%)'
    sec3.style.transform='translateX(-208%)'
})


const data = [
    {
        img: "./img/AMBImage.png",
        nomi: "Andhra Mutton Biryani"
    },
    {
        img: "./img/AMBImage.png",
        nomi: "Andhra Mutton Biryani",
    },
    {
       img:"./img/AMBImage.png",
       nomi: "Andhra Mutton Biryani",
    },
]
let searchInput = document.querySelector("#search");
let section2 =document.querySelector(".sec1_img");
let madal = document.querySelector(".madal");
let modal = document.querySelector(".modal");
let body = document.querySelector("body")
data.forEach((item) =>{
section2.innerHTML = `
                <div class="sec1_img_1">
                    <div class="sec1_img_1_top">
                        <img src="${item.img}" width="260px" alt="">
                    </div>
                    <div class="sec1_img_1_bottom">
                        <div class="sec1_i_b_l">
                            <p>${item.nomi}</p>
                           <div class="d1">
                            <span>Server 2</span>
                            <b>750/-</b>
                           </div>
                        </div>

                        <div class="sec1_i_b_r">
                            <button>Add </button>
                            <button id="btn">Schedule</button>
                        </div>
                        
                    </div>
                </div>
    
    `

})


// searchInput.addEventListener('input', e => {
    
//     if(searchInput.value.length == 0){
//         modal.style.display = "none"
//     } else if(searchInput.value.length > 0){
//         modal.style.display = "block"
//         // body.style.background = 
//     }

//     const element = e.target.value.toLowerCase()

//     const searchFunc = data.filter(data => {
//         return data.nomi.toLowerCase().includes(element)
//     }
//     )
  
//     viewResults(searchFunc)
// })

// const viewResults = (arr) => {
//     let output = "";

//     arr.forEach(({
//         img,
//         nomi
//     }) => (output += `
//             <div class="results">
//                 <img src="${img}"> 
//                 <p> ${nomi} </p>
//             </div>
   
//     `));
//     madal.innerHTML = output;
// }
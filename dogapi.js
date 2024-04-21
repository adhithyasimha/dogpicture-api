
let btn=document.querySelector("button")
let url="https://dog.ceo/api/breeds/image/random"

async function getphotos(){
    try{
    let photo=await axios.get(url)
    return photo.data.message
}catch(err){
    console.log(err);

}
}
btn.addEventListener("click",async()=>{
    let dogpic=await getphotos()
    console.log(dogpic)
    let img=document.querySelector("img")
    img.setAttribute("src",dogpic)
    
})


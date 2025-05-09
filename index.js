import {accessKey} from "./key.js"
const searchForm = document.querySelector(".searchform")
const searchBox = document.querySelector(".searcharea")
const searchResult = document.querySelector(".searchresult")
const ShowMoreBtn = document.querySelector(".showmore")


let keyword = ""
let page = 1;

 async function searchimage(){
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url)
    const data = await response.json()
    if(page ===1){
        searchResult.innerHTML = ""
    }
    const imagedata = data.results
    imagedata.map((data)=>{
        let img = document.createElement("img")
        img.src = data.urls.small
        let anchor = document.createElement("a")
        anchor.href = data.links.html
        anchor.target = "_blank"
        anchor.appendChild(img)
        searchResult.appendChild(anchor)
    })
    ShowMoreBtn.style.display = "block"

}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    page=1
    searchimage()
})

ShowMoreBtn.addEventListener("click",()=>{
    page++
    searchimage()
})






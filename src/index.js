console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', () => {fetchPhotos(), fetchBreeds()})
let imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchPhotos(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogArr => dogArr.message.forEach(renderPhoto)
)}


function renderPhoto(dogPhoto){
let dogDiv = document.querySelector("#dog-image-container")
let dogImg = document.createElement("img")
    
   dogImg.setAttribute('src', dogPhoto);
   dogDiv.appendChild(dogImg)
}

function fetchBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(dogBreeds => (Object.keys(dogBreeds.message).forEach(listBreeds)))}


function listBreeds(breeds){
    let breedList = document.querySelector("#dog-breeds")
    let breedItem = document.createElement("li")
    let dogFilter = document.querySelector("#breed-dropdown")
    breedItem.innerHTML = breeds
    //console.log(breeds.message.filter(breeds));
    
    //const breedFilter = breeds.filter()
    dogFilter.addEventListener("change",() => (breeds.slice(0,1) === dogFilter.value  ? breedItem.text = breeds &&
    breedList.appendChild(breedItem) : breedItem.text = undefined))
    breedItem.addEventListener("click", () => breedItem.style.color = "red")
    dogFilter.addEventListener("change",() => breeds.slice(0,1) === dogFilter.value  ?  breedItem.text == breeds && breedList.appendChild(breedItem) : breedItem.text = undefined)
    ;
}



  






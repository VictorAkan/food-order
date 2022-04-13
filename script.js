// getting the input search of users


// loading the search request
let searchButton = document.getElementById("searchBtn");
let sideDiv = document.getElementById("rightDiv");
let input = document.getElementById("inputLine");
let appInstance = document.getElementById("app");
const getPosts = async () => {
    const res = await fetch('https://udayogra-indian-restaurants-menu-v1.p.rapidapi.com/dl');
    const data = await res.json()
    console.log(data);
    appInstance.textContent = data;
}
getPosts()
searchButton.onclick = function () {
    // let loadElem = document.getElementById("loader")
    // sideDiv.textContent = "loading, please wait....";
    
    
    // setTimeout(() => {
    //     getPosts();
    // }, 5000);
    
}
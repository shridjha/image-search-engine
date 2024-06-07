const accessKey="a9fEvhC1GLmC0HiC1nky1tYhJnYbj-jCjiW7b28EiPs";
const searchFrom = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("load-more-btn");



let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?pages=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const res = await fetch(url);
    const data = await res.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }

   const results = data.results;

   results.map((result) => {

    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target="_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
       
})

showMoreBtn.style.display = "block";


}

searchFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    page=1;
    searchImages();
})


showMoreBtn.addEventListener("click", () => {
page++;
searchImages();

})
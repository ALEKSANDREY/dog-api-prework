// 1. find elements in HTML by their ID
const contentDiv = document.getElementById("content");
const breedsBtn = document.getElementById("breedsBtn");
const imagesBtn = document.getElementById("imagesBtn");

// 2. click on button Breeds
breedsBtn.addEventListener("click", () => {
    // clear before adding new data
    contentDiv.innerHTML = "<p class='text-center w-full'>Loading breeds...</p>";

    // later will add fetchBreeds()
    console.log("Breeds button clicked!");
});

// 3. click on button Images
imagesBtn.addEventListener("click", () => {
    contentDiv.innerHTML = "<p class='text-center w-full'>Loading images...</p>";

    // later will add fetchImages()
    console.log("Images button clicked!");
});
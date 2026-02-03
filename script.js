const contentDiv = document.getElementById("content");
const breedsBtn = document.getElementById("breedsBtn");
const imagesBtn = document.getElementById("imagesBtn");

breedsBtn.addEventListener("click", () => {
    contentDiv.innerHTML = "<p>Breeds will appear here...</p>";
});

imagesBtn.addEventListener("click", () => {
    contentDiv.innerHTML = "<p>Images will appear here...</p>";
});

const API_KEY = "YOUR_API_KEY_HERE"; // Replace locally

function fetchBreeds() {
    contentDiv.innerHTML = "";

    fetch("https://api.thedogapi.com/v1/breeds", {
        headers: { "x-api-key": API_KEY }
    })
        .then(res => res.json())
        .then(data => {
            data.forEach(breed => {
                const div = document.createElement("div");
                div.className = "bg-white p-3 rounded shadow text-center";
                div.textContent = breed.name;
                contentDiv.appendChild(div);
            });
        })
        .catch(err => {
            contentDiv.textContent = "Error loading breeds.";
            console.error(err);
        });
}

breedsBtn.addEventListener("click", fetchBreeds);

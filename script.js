const contentDiv = document.getElementById("content");
const breedsBtn = document.getElementById("breedsBtn");

breedsBtn.addEventListener("click", fetchBreeds);

function fetchBreeds() {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then(response => response.json())
    .then(data => {
      contentDiv.innerHTML = "";
      data.forEach(breed => {
        const p = document.createElement("p");
        p.textContent = breed.name;
        contentDiv.appendChild(p);
      });
    })
    .catch(error => {
      contentDiv.textContent = "Error loading breeds.";
      console.error(error);
    });
}


const contentDiv = document.getElementById("content");
const breedsBtn = document.getElementById("breedsBtn");
const imagesBtn = document.getElementById("imagesBtn");

// Getting the secret key from the .env file so it stays hidden
const API_KEY = import.meta.env.VITE_DOG_API_KEY;

// This helps us not repeat the header code every time
const myHeaders = {
    headers: { "x-api-key": API_KEY } //
};

// 1. Function to show the list of breeds
function fetchBreeds() {
    contentDiv.innerHTML = "Loading breeds...";

    fetch("https://api.thedogapi.com/v1/breeds", myHeaders)
        .then(res => res.json())
        .then(data => {
            contentDiv.innerHTML = "";
            // We only show 10 so the page isn't too long
            data.slice(0, 10).forEach(breed => {
                const card = document.createElement("div");
                card.className = "breed-card";
                card.textContent = breed.name;

                // When we click the name, it calls the picture function for this dog
                card.addEventListener("click", function() {
                    showImagesForBreed(breed.id, breed.name);
                });

                contentDiv.appendChild(card);
            });
        });
}

// 2. Function to show pictures for a specific breed
function showImagesForBreed(id, name) {
    contentDiv.innerHTML = "Finding pictures of " + name + "...";

    fetch("https://api.thedogapi.com/v1/images/search?breed_ids=" + id + "&limit=3", myHeaders) //
        .then(res => res.json())
        .then(data => {
            contentDiv.innerHTML = "<h2>Pictures of " + name + "</h2>";
            data.forEach(dog => {
                const img = document.createElement("img");
                img.src = dog.url;
                img.className = "dog-image";
                contentDiv.appendChild(img);
            });
        });
}

// 3. Function to show random images
function fetchRandomImages() {
    contentDiv.innerHTML = "Loading...";

    // We add 'has_breeds=1' and specifically ask for breed info
    fetch("https://api.thedogapi.com/v1/images/search?limit=6&has_breeds=1&include_breeds=true", myHeaders)
        .then(res => res.json())
        .then(data => {
            contentDiv.innerHTML = "";

            data.forEach(dog => {
                const img = document.createElement("img");
                img.src = dog.url;
                img.className = "dog-image";

                // LOGIC: Getting the name when we click
                img.addEventListener("click", function() {
                    // We check the 'breeds' list that the API sends back
                    if (dog.breeds && dog.breeds.length > 0) {
                        alert("This dog is a: " + dog.breeds[0].name);
                    } else {
                        // This is a backup just in case
                        alert("The API didn't give us a name for this specific photo.");
                    }
                });

                contentDiv.appendChild(img);
            });
        })
        .catch(err => {
            console.log("Error happened!", err);
        });
}

// Clicking the main buttons to start the app
breedsBtn.addEventListener("click", fetchBreeds);
imagesBtn.addEventListener("click", fetchRandomImages);
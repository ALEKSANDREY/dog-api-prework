// 1. Select elements from the HTML document
const contentDiv = document.getElementById("content");
const breedsBtn = document.getElementById("breedsBtn");
const imagesBtn = document.getElementById("imagesBtn");

// 2. Function to fetch the list of dog breeds
function fetchBreeds() {
    // Clear the content container before loading new data
    contentDiv.innerHTML = "";

    // Fetch data from the /breeds endpoint
    fetch("https://api.thedogapi.com/v1/breeds")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => {
            // Take the first 15 breeds for display
            data.slice(0, 15).forEach(breed => {
                // Create a card element for each breed
                const card = document.createElement("div");
                card.className = "bg-white p-4 rounded-lg shadow hover:shadow-md transition border-l-4 border-blue-500";

                // Set the HTML content for the breed card
                card.innerHTML = `
                    <h3 class="font-bold text-lg text-blue-900">${breed.name}</h3>
                    <p class="text-sm text-gray-600 italic">${breed.breed_group || "Companion"}</p>
                `;

                contentDiv.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching breeds:", error);
            contentDiv.innerHTML = "<p class='text-red-500'>Failed to load breeds. Please try again later.</p>";
        });
}

// 3. Function to fetch random dog images
function fetchImages() {
    // Clear the content container
    contentDiv.innerHTML = "";

    // Request 6 random images
    fetch("https://api.thedogapi.com/v1/images/search?limit=6")
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                // Create an image element
                const img = document.createElement("img");
                img.src = item.url;
                img.className = "w-full h-64 object-cover rounded-lg shadow-lg";
                img.alt = "A cute dog";

                contentDiv.appendChild(img);
            });
        })
        .catch(error => {
            console.error("Error fetching images:", error);
            contentDiv.innerHTML = "<p class='text-red-500'>Error loading images.</p>";
        });
}

// 4. Attach Event Listeners to buttons
breedsBtn.addEventListener("click", fetchBreeds);
imagesBtn.addEventListener("click", fetchImages);
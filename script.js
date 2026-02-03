// 1. Находим элементы в HTML по их ID
const contentDiv = document.getElementById("content");
const breedsBtn = document.getElementById("breedsBtn");
const imagesBtn = document.getElementById("imagesBtn");

// 2. Обработка нажатия на кнопку Breeds
breedsBtn.addEventListener("click", () => {
    // Очищаем контейнер перед загрузкой новых данных
    contentDiv.innerHTML = "<p class='text-center w-full'>Loading breeds...</p>";

    // Здесь позже появится функция fetchBreeds()
    console.log("Breeds button clicked!");
});

// 3. Обработка нажатия на кнопку Images
imagesBtn.addEventListener("click", () => {
    contentDiv.innerHTML = "<p class='text-center w-full'>Loading images...</p>";

    // Здесь позже появится функция fetchImages()
    console.log("Images button clicked!");
});
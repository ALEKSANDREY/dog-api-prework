# Dog API Explorer

A clean, responsive web application that allows users to explore data from **The Dog API**. This project was developed as part of the Advanced Pre-Work assignment for Code the Dream.

## Features
- **Breed Discovery**: Fetches a list of dog breeds, displaying their names and breed groups directly from the API.
- **Random Image Gallery**: Retrieves 6 random high-quality dog images for a dynamic user experience.
- **Responsive Layout**: Uses Tailwind CSS and custom CSS to ensure the site looks great on desktops, tablets, and mobile devices.
- **Error Handling**: Includes robust error catching to notify the user if the API request fails.

## How to Run the Project
1. **Download/Clone**: Download this repository to your local machine.
2. **Open index.html**: Locate the `index.html` file in the project folder and open it in any modern web browser (Google Chrome, Firefox, or Microsoft Edge).
3. **Interact**: Click the "View Breeds" or "View Images" buttons to see data retrieved in real-time.

## Project Structure
- `index.html`: The core structure and layout of the application.
- `styles.css`: Custom CSS for animations (like the loading pulse) and hover effects.
- `script.js`: The "brain" of the app, using the JavaScript Fetch API to interact with the Dog API end-points.
- `.gitignore`: Configured to keep the repository clean by excluding IDE-specific folders (like `.idea/`).

## Technologies Used
- **HTML5 & JavaScript (ES6+)**: For structure and dynamic data fetching.
- **Tailwind CSS**: For a modern, utility-first design approach.
- **The Dog API**: A public API used as the data source for breeds and images.

## Developer Notes
- This project follows best practices by keeping the structure (HTML), style (CSS), and logic (JS) in separate files.
- The UI is designed for accessibility with clear font sizes and high-contrast colors.
# Dog API Explorer

A clean, responsive web application that allows users to explore data from **The Dog API**. This project was developed as part of the Advanced Pre-Work assignment for **Code the Dream**, focusing on asynchronous data fetching and secure API management.

## Features
- **Breed Discovery**: Fetches a list of dog breeds from the `/breeds` endpoint. Clicking a breed name triggers a specific search to show images of that breed.
- **Interactive Image Gallery**: Retrieves random dog images. Clicking any image reveals the breed name via a browser alert.
- **Secure API Key Management**: Utilizes Vite environment variables and a `.env` file to keep API credentials secure and out of the public repository.
- **Responsive Layout**: Uses a CSS Grid layout to ensure the site remains functional and attractive on all devices.

## How to Run the Project
1. **Download/Clone**: Download this repository to your local machine.
2. **Install Dependencies**: Open your terminal in the project folder and run:
   ```bash
   npm install
Configure API Key:

Create a file named .env in the root directory.

Add your key: VITE_DOG_API_KEY=your_actual_key_here

Start Development Server: Run the following command in the terminal:

Bash

npm run dev
View App: Open your browser to the local address provided (usually http://localhost:5173).

Project Structure
index.html: The core structure and entry point for the Vite application.

styles.css: Custom CSS for grid layouts, hover effects, and responsive design.

script.js: The "brain" of the app, containing the Fetch API logic and event listeners for interactivity.

.env: (Private) Stores the API key securely. This file is ignored by Git.

.gitignore: Configured to exclude node_modules/ and the .env file from version control.

Technologies Used
JavaScript (ES6+): For dynamic data fetching and DOM manipulation.

Vite: A modern build tool used for fast development and environment variable management.

The Dog API: The primary data source for all breed information and images.

Developer Notes
Security Best Practices: This project follows professional standards by using a .env file to prevent sensitive API keys from being pushed to public repositories.

Interactive Logic: The application implements "connected logic," where data from the Breeds endpoint is used to filter results in the Images endpoint.
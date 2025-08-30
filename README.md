# Movie Watchlist App

A simple web application to search for movies and manage your personal watchlist, built with vanilla JavaScript, HTML, CSS, and powered by the OMDb API.

## Features
- **Search Movies:** Enter a movie title to fetch details from the OMDb API.
- **Add to Watchlist:** Add movies to your personal watchlist with a single click.
- **Duplicate Prevention:** Prevents adding the same movie more than once.
- **Responsive UI:** Clean and modern interface styled with CSS.

## How It Works
1. **Search:** Type a movie name in the search bar and click the `Search` button.
2. **Display:** Movie details (poster, title, rating, runtime, type, plot) are displayed.
3. **Add:** Click the `+` button to add the movie to your watchlist. If the movie is already in your watchlist, you'll get an alert.

## Project Structure
```
movie_watchlist_app/
├── header.jpg
├── index.html         # Main HTML file
├── index.js           # Main JavaScript logic
├── main.css           # Stylesheet
├── package.json       # Project metadata and scripts
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```

## Setup & Usage
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm start
   ```
3. **Open your browser:**
   Visit `http://localhost:5173` (or the port shown in your terminal).

## Technologies Used
- [Vite](https://vitejs.dev/) for fast development
- [OMDb API](https://www.omdbapi.com/) for movie data
- `Vanilla JavaScript, HTML, and CSS`

## Customization
- You can update the UI in `main.css`.
- To change the OMDb API key, edit the fetch URL in `index.js`.

## License
This project is for educational purposes and part of the Scrimba Frontend Developer Career Path.

---
Happy Coding!

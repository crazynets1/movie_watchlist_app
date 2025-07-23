const moviesSection = document.getElementById('movies')
const searchArea = document.getElementById('search-area')
const searchBtn = document.getElementById('search-btn')
const addedMovieSect = document.getElementById('added-movie')
let movie = ''
let moviesArr = []

searchBtn.addEventListener('click', function() {
    if (searchArea.value == '') {
        alert('Please, enter the name of the movie')
    } else {
        renderMovies()
        searchArea.value = ''
    }
})


async function renderMovies () {
    let movieHtml = ''
    let searchedMovie = searchArea.value
    try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=40947cf7&t=${searchedMovie}`, {method:'GET'})
            const data = await res.json()
            if (data.Response === 'False') {
                throw new Error('Movie not found. Please try another title.')
            }
                movie = data
                movieHtml = `
                    <div class="movie-card">
                        <img class="movie-poster" src="${movie.Poster}" alt="${movie.Title} image">
                        <div class="movie-details">
                            <div class="title-rating">
                                <h2 class="title">${movie.Title}</h2>
                                <p class="rating">${movie.imdbRating}</p>
                            </div>
                            <div class="time-type">
                                <p>${movie.Runtime}</p>
                                <p>${movie.Type}</p>
                            </div>
                            <p class="plot-story">${movie.Plot}</p>
                        </div>
                        <button class="add-btn" data-imdb-id="${movie.imdbID}" data-movie='${JSON.stringify(movie)}'>+</button>
                    </div>
                `
                moviesSection.insertAdjacentHTML("afterbegin", movieHtml)
        } catch (err) {
            alert(err)
        }
}

document.addEventListener('click', (e) => {
    if (e.target.dataset.imdbId) {
        const clickedMovie = JSON.parse(e.target.dataset.movie)
        if (moviesArr.some(existingMovie => existingMovie.imdbID == clickedMovie.imdbID)) {
            alert(`${clickedMovie.Title} already added in your watchlist, try to add another movie`)
        }else {
            moviesArr.push(clickedMovie)
            console.log(moviesArr)
            handleFavoriteMovies()
        }
    }
})


function handleFavoriteMovies() {
    console.log(moviesArr.length)
}
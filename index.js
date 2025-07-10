const moviesSection = document.getElementById('movies')
const searchArea = document.getElementById('search-area')
const searchBtn = document.getElementById('search-btn')
const addBtn = document.getElementById('add-btn')
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
                movie = data
                movieHtml = `
                    <div class="movie-card">
                        <img class="movie-poster" src="${movie.Poster}">
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
                        <button class="add-btn" id="add-btn">+</button>
                    </div>
                `
                moviesSection.insertAdjacentHTML("afterbegin", movieHtml)
        } catch (err) {
            alert(err)
        }
}

addBtn.addEventListener('click', function() {
    addMovie()
})

function addMovie () {
       let addedMovie = {
        poster: movie.Poster,
        title:  movie.Title,
        mins:   movie.Runtime,
        type:   movie.Type
    }
    moviesArr.unshifts(addedMovie)
    console.log(moviesArr)
    console.log(moviesArr.length)
}
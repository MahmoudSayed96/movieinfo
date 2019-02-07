/**
 * UI Class
 * 
 * This class control in ui elements
 */
class UI {
    constructor() {
        // DOM Elements
        this.searchInput = document.querySelector('#search-input');
        this.searchBtn = document.querySelector('#search-btn');
        this.movies = document.querySelector('#movies');
    }

    /**
     * showMovies()
     * Diplay all movies information
     * 
     * @param Array
     * @return void
     */
    showMovies(movies) {
        const html = movies.map(movie => {
            return `
                <div class="col-md-4">
                    <div class="card card-body mb-3">
                        <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                        <div class="card-body">
                            <h2 class="card-title text-muted text-center">${movie.Title}</h2>
                            <button data-movie-id="${movie.imdbID}" class="movie-detlies btn btn-primary">Movie Detalis</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        this.movies.innerHTML = html;
    }
    /**
     * showMovieDetalis();
     * Display all information about the movie
     */
    showMovieDetalis(movie) {
        const html = `
            <div class="row">
                <div class="col-md-4">
                    <img class="" src="${movie.Poster}" alt="${movie.Title}">
                </div>
                <div class="col-md-8">
                    <h2>${movie.Title}</h2>
                    <ul class="list-group bg-dark">
                        <li class="list-group-item"><strong>Genre: </strong>${movie.Genre}</li>
                        <li class="list-group-item"><strong>Released: </strong>${movie.Released}</li>
                        <li class="list-group-item"><strong>Rated: </strong>${movie.Rated}</li>
                        <li class="list-group-item"><strong>IMDB Rating: </strong>${movie.imdbRating}</li>
                        <li class="list-group-item"><strong>Director: </strong>${movie.Director}</li>
                        <li class="list-group-item"><strong>Writer: </strong>${movie.Writer}</li>
                        <li class="list-group-item"><strong>Actros: </strong>${movie.Actros}</li>
                    </ul>
                </div>
            </div>
            <hr class="my-3">
            <div class="row">
                <div class="card-body">
                    <h3>Plot</h3>
                    <p class="lead">${movie.Plot}</p>
                    <a href="http://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">View IMDB</a>
                    <a href="index.html" class="btn btn-light">Back</a>
                </div>
            </div>
        `;
        // Store html in session storage
        sessionStorage.setItem('html', html);
        // Redirect to movie page
        window.location = '../movie.html';
    }
}
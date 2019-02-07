/**
 * App file
 * 
 * Control in the main application
 */

// Init UI Object
const ui = new UI();

// document.querySelector('#search-btn').addEventListener('click', getMovies);
document.body.addEventListener('click', getMovies);
document.body.addEventListener('click', getMovie);

function getMovies(e) {
    if (e.target.id === 'search-btn') {
        // Prevent the default behavior for the form action
        e.preventDefault();
        // Get the search input text value
        const textValue = ui.searchInput.value;
        if (textValue === '') {
            alert("Place,enter movie name");
            return false;
        }
        // Init Movie Object
        const movie = new Movie(textValue);
        movie.getMovies()
            .then(response => {
                const moviesArray = response.Search;
                ui.showMovies(moviesArray);
            })
            .catch(err => console.log(err));
    }
}

function getMovie(e) {
    if (e.target.classList.contains('movie-detlies')) {
        const movieId = e.target.getAttribute('data-movie-id');
        // Prevent the default behavior for the form action
        e.preventDefault();
        // Init Movie Object
        const movie = new Movie();
        movie.getMovie(movieId)
            .then(response => {
                console.log(response);
                ui.showMovieDetalis(response);
            })
            .catch(err => console.log(err));
    }
}
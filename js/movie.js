/**
 * Movie Class
 * 
 * This class control in API
 */
class Movie {
    constructor(movie = null) {
        this.movie = movie;
        this.apiKey = 'de22d8e4';
        // http://www.omdbapi.com/?i=tt3896198&apikey=de22d8e4
    }
    /**
     * getMovies();
     * Get the movie object data from api
     * 
     * @param void
     * @return Promise Object
     */
    async getMovies() {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?s=${this.movie}&apikey=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }
    /**
     * getMovie();
     * Get the movie information based on it's id
     * id - come from the session storage
     * 
     * @param void
     * @return Promise Object
     */
    async getMovie(id) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i=${id}&apikey=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }
}

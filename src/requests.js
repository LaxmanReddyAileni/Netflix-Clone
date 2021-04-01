// const API_KEY = "8e6e2786bed9189394cd0821f8ed6142";

const requests = {
fetchTrending: "/trending/all/week?api_key=8e6e2786bed9189394cd0821f8ed6142&language=en-US",
fetchNetflixOriginals : '/discover/tv?api_key=8e6e2786bed9189394cd0821f8ed6142&with_network=213',
fetchTopRated: '/movie/top_rated?api_key=8e6e2786bed9189394cd0821f8ed6142&language=en-US',
fetchActionMovies: '/discover/movie?api_key=8e6e2786bed9189394cd0821f8ed6142&with_genres=28',
fetchComedyMovies: '/discover/movie?api_key=8e6e2786bed9189394cd0821f8ed6142&with_genres=35',
fetchHorrorMovies: '/discover/movie?api_key=8e6e2786bed9189394cd0821f8ed6142&with_genres=27',
fetchRomanceMovies: '/discover/movie?api_key=8e6e2786bed9189394cd0821f8ed6142&with_genres=10749',
fetchDocumentaries: '/discover/movie?api_key=8e6e2786bed9189394cd0821f8ed6142&with_genres=99',
};
//fetchDocumentaries: '/discover/movie?api_key=${API_KEY}&with_genres=99',
export default requests;
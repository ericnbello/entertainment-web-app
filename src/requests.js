const API_KEY = "0c7b0d279c441dec486b8bf4ee392304";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,

    // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}$with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    // fetchSimilarMovies: `/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,

    fetchTopRatedSeries: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopularSeries: `/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genre=35`,
  }
  export default requests;
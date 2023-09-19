const API_KEY = process.env.REACT_APP_TMDB_API_KEY

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

    // Movies
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    // fetchSimilarMovies: `/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,

    // TV Series
    fetchPopularSeries: `/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedSeries: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionAdventureSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorSeries: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    fetchSciFiFantasySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
    fetchWesternSeries: `/discover/tv?api_key=${API_KEY}&with_genres=37`,

    // Netflix Originals
    // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}$with_networks=213`,
  }
  export default requests;

// import React from 'react'
// const API_KEY = process.env.Api_Key;


const API_KEY = "5c39bc644f507bd3c2010d306ff36b30";

export const base_url = "https://image.tmdb.org/t/p/original/";

const requests = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
 fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749 & certification=PG-13-US order=3`,
fetchDocumentaries: `/discover/movie?api_key=${ API_KEY }&with_genres`,
fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    
}
export default requests;
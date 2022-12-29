import React, { useState, useEffect } from 'react'

import axios from '../axios/axios.js'

//import custom components
import './Row.css'
import { base_url } from '../request/request'

import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow = 0 }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  // const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();

  }, [fetchUrl])
  console.log(movies)


  const opts = {
        hieght: "390",
        width: "100%",
        playerVars: {
        autoplay: 1
        },
  };
  
  // // click handling function
    const handleClick= (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || movie?.name || movie.orginal_name)
                .then((url) => {
                    const urlPalarms = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlPalarms.get( "v"));
                })
            .catch((error)=>console.log(error))
        }
    }

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
             onClick={() => handleClick(movie)}
            className={`row_poster ${ isLargeRow && "row_posterLarge" }`}
            key={movie.id}
            // src={`${ base_url }${ movie.poster_path}`} // image with poster writting

            src={`${ base_url }${ isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            
            alt={movie.name} />
        ))}
      </div>
          {/* Youtube trailer search player */}
          
      <div >
        {trailerUrl && <Youtube
          videoId={trailerUrl}
          opts={opts}
          style={{ padding: "10px" }}
        />}
              
          </div>

    </div>
  )
}
export default Row;

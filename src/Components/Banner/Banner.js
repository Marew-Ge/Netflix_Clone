import React, { useState, useEffect } from 'react'
// import axios from "../Axios/axios.js"

import './Banner.css'
import requests from '../request/request.js'
import axios from '../axios/axios'


const Banner = () => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        // // using Axios method
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();




    }, [])
    console.log(movies);


    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    };

    return (
        <div className='banner' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${ movies?.backdrop_path }")`
        }}>
            <div className="banner__contents">

                <h1 className="banner__title">
                    {movies?.title || movies?.name || movies?.orginal_name}
                </h1>

                <div className="banner__button">
                    <button className='banner__btn'>Play</button>
                    <button className='banner__btn'>My List</button>
                </div>

                <h1 className="banner__decription">
                    {truncate(movies?.overview, 125)}
                </h1>
            </div>
            <div className="banner__fadeBotton" />
        </div>
    )
}

export default Banner
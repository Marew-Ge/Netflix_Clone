import React from 'react'
import Banner from './Banner/Banner'
import Navbar from './Navbar/Navbar'
import Row from './Row/Row'
import requests from './request/request'




function HomeScreen() {
  return (
      <div>
          < Navbar />
          <Banner />

          <Row
                title='NETNFILX ORGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl= {requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl= {requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl= {requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl= {requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl= {requests.fetchRomanceMovies} />
            <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Popular Movies" fetchUrl= {requests.fetchPopular} />
            
          
      </div>
  )
}

export default HomeScreen
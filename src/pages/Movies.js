import React from "react";
import Row from "../components/Row";
import requests from "../requests";

export default function Movies(props) {
    return (
        <div className="movies mx-auto">
            <div>
            </div>
            {/* <div className={(props.searchTerm==='' ? `block` : `hidden`)}> */}
                <h2 className="text-2xl text-white py-4">Movies</h2>

                <Row title="Popular" url={requests.fetchPopularMovies} />
                <Row title="Action" url={requests.fetchActionMovies} />  
                <Row title="Horror" url={requests.fetchHorrorMovies} />  
                <Row title="Comedy" url={requests.fetchComedyMovies} />  
                <Row title="Romance" url={requests.fetchRomanceMovies} />  
                <Row title="Documentaries" url={requests.fetchDocumentaryMovies} />  
                <Row title="Sci-Fi" url={requests.fetchSciFiMovies} />
                <Row title="Thriller" url={requests.fetchThrillerMovies} />
                <Row title="Westerns" url={requests.fetchWesternMovies} />
            {/* </div> */}
        </div>
    )
}
import React from "react";
// import SearchForm from "../components/SearchForm";
import Row from "../components/Row";
import requests from "../requests";

export default function Movies(props) {
    return (
        <div className="movies mx-auto">
            {/* <SearchForm
                searchTerm={props.searchTerm}
                setSearchTerm={props.setSearchTerm}
                handleSearch={props.handleSearch}
                placeholderText='Search for movies'
                // arr={props.movies}
            /> */}
            <div>
            </div>
            {/* <div className={(props.searchTerm==='' ? `block` : `hidden`)}> */}
                <h2 className="text-2xl text-white py-4">Movies</h2>

                <Row title="Top Rated" url={requests.fetchTopRatedMovies} />
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
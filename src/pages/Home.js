import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Row from "../components/Row";
import requests from "../requests";

export default function Home(props) {
    // const [searchTerm, setSearchTerm] = useState('');
    // const handleSearch = e => setSearchTerm(e.target.value);
    // for(var i=0; i<props.arr.length; i++) {
    //     if(props.arr[i].category === "Movie") {
    //         props.arr[i].icon = '../assets/icon-category-movie.svg'
    //     }
    //     if(props.arr[i].category === "TV Series") {
    //         props.arr[i].icon = '../assets/icon-category-tv.svg'
    //     }
    // }
    
    return (
        <div className="home mx-auto">
            {/* <SearchForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                placeholderText='Search for movies or TV series'
                // arr={props.arr}
            /> */}
            {/* <div className={(searchTerm==='' ? `block` : `hidden`)}> */}
                <Row title="Trending" url={requests.fetchTrending} />
                <Row title="Popular Movies" url={requests.fetchPopularMovies} />
                <Row title="Popular TV Shows" url={requests.fetchPopularSeries} />
            {/* </div> */}
        </div>
    )
}
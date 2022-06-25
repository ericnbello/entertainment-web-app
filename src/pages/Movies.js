import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Grid from "../components/Grid";
import axios from 'axios'
import { Link } from "react-router-dom";
import PlayIcon from "../components/icons/PlayIcon";
import BookmarkIcon from "../components/icons/BookmarkIcon";
import Row from "../components/Row";
import requests from "../requests";

export default function Movies(props) {
    const movies = []

    for(var i=0; i<props.arr.length; i++) {
        if(props.arr[i].category === "Movie") {
            movies.push(props.arr[i])
        }
    }

    return (
        <div className="movies mx-auto">
            <SearchForm
                searchTerm={props.searchTerm}
                setSearchTerm={props.setSearchTerm}
                handleSearch={props.handleSearch}
                placeholderText='Search for movies'
                arr={movies}
            />
            <div>
            </div>
            <div className={(props.searchTerm==='' ? `block` : `hidden`)}>
                {/* <Grid arr={topRatedMovies} /> */}
                <h2 className="text-2xl text-white py-4">Movies</h2>
                <Row title="Top Rated" url={requests.fetchTopRatedMovies} />
                <Row title="Horror" url={requests.fetchHorrorMovies} />  
                <Row title="Comedy" url={requests.fetchComedyMovies} />  
                <Row title="Romance" url={requests.fetchRomanceMovies} />  
                <Row title="Documentaries" url={requests.fetchDocumentaries} />  



                {/* {topRatedMovies.map((video,idx) => {
                    return (                    
                        <div key={video.id} className="flex flex-col text-xl text-white col-span-1 justify-start w-64">
                            <div className="relative z-0">
                                <Link to={`../${video.title == null ? (video.name.replace(/\W+/g, '-').toLowerCase()) : (video.title.replace(/\W+/g, '-').toLowerCase())}`}>
                                    <div className="relative z-10 hover:bg-black hover:opacity-75 group">
                                        <div className="absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 invisible group-hover:visible">
                                            <PlayIcon />
                                        </div>
                                        <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w185${video.poster_path}`} alt={video.title} />
                                    </div>
                                </Link>
                                <BookmarkIcon isBookmarked={video.isBookmarked}/>
                                <p></p>
                            </div>
                            <div className="flex flex-col flex-wrap py-2">
                                <p className="flex pt-1 text-sm font-light">{video.release_date} • 
                                <span className="px-2 pt-1"><img src="/assets/icon-category-movie.svg" alt="icon"/></span>
                                Movie</p>
                                <p className="text-lg font-medium">{video.title == null ? video.name : video.title}</p>
                            </div>
                        </div>
                    )
                })} */}

                {/* <h2 className="heading text-xl text-white py-4">Movies</h2>
                <Grid arr={movies} /> */}
                
            </div>
        </div>
    )
}
import React from "react";
import SearchForm from "../components/SearchForm";
import Grid from "../components/Grid";

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
            <div className={(props.searchTerm==='' ? `block` : `hidden`)}>
                <h2 className="heading text-xl text-white py-4">Movies</h2>
                <Grid arr={movies} />
            </div>
        </div>
    )
}
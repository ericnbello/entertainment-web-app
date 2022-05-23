import React from "react";
import MovieBookmarks from "../components/MovieBookmarks";
import SeriesBookmarks from "../components/SeriesBookmarks";
import SearchForm from "../components/SearchForm";

export default function Bookmarks(props) {
    const bookmarkedMovies = []
    const bookmarkedSeries = []

    for(var i=0; i<props.arr.length; i++) {
        if(props.arr[i].isBookmarked === true) {
            if(props.arr[i].category === "Movie") {
                bookmarkedMovies.push(props.arr[i])
            }
            if(props.arr[i].category === "TV Series") {
                bookmarkedSeries.push(props.arr[i])
            }
        }
    }

    const bookmarks = bookmarkedMovies.concat(bookmarkedSeries)

    return (
        <div className="bookmarks mx-auto">
            <SearchForm
                searchTerm={props.searchTerm}
                setSearchTerm={props.setSearchTerm}
                handleSearch={props.handleSearch}
                placeholderText='Search for bookmarked shows'
                arr={bookmarks}
            />
            <div className={(props.searchTerm==='' ? `block` : `hidden`)}>
                <MovieBookmarks arr={bookmarkedMovies} />
                <SeriesBookmarks arr={bookmarkedSeries} />
            </div>
        </div>
    )
}
import React from "react";
import MovieBookmarks from "../components/MovieBookmarks";
import SeriesBookmarks from "../components/SeriesBookmarks";
import SearchForm from "../components/SearchForm";
import media from "../../src/mediaData.json";

export default function Bookmarks() {
    const bookmarkedMovies = []
    const bookmarkedSeries = []

    for(var i=0; i<media.length; i++) {
        if(media[i].category === "Movie" 
            && media[i].isBookmarked === true) {
            bookmarkedMovies.push(media[i])
        }

        if(media[i].category === "TV Series" 
            && media[i].isBookmarked === true) {
            bookmarkedSeries.push(media[i])
        }
    }

    const bookmarks = bookmarkedMovies.concat(bookmarkedSeries)

    return (
        <div>
            <SearchForm
                placeholderText='Search for bookmarked shows'
                arr={bookmarks}
            />
            <MovieBookmarks arr={bookmarkedMovies} />
            <SeriesBookmarks arr={bookmarkedSeries} />
        </div>
    )
}
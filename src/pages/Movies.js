import React from "react";
import SearchForm from "../components/SearchForm";
import media from "../mediaData.json"

export default function Movies() {
    const movies = []

    for(var i=0; i<media.length; i++) {
        if(media[i].category === "Movie") {
            movies.push(media[i])
        }
    }

    return (
        <div className="movies mx-auto">
            <SearchForm
                id='movie-search'
                buttonId='movie-search-btn'
                name='movie'
                inputName='movie-input'
                placeholderText='Search for movies'
                arr={movies}
            />
            <h2 className="heading text-xl text-white py-4">Movies</h2>
            <div id="movie-grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-100">
                {movies.map((video) => {
                    return (
                        <div className="flex flex-col text-xl text-white col-span-1 justify-start">
                            <img className="rounded-lg" src={video.thumbnail.regular.large} alt={video.title} />
                            <p className="text-sm">{video.year} - {video.category} - {video.rating}</p>
                            <p className="text-lg">{video.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
import React, {useState} from "react";
import SearchForm from "../components/SearchForm";
import media from "../mediaData.json"
import Grid from "../components/Grid";

export default function Movies() {
    const [searchTerm, setSearchTerm] = useState('')
    const handleChange = event => setSearchTerm(event.target.value);

    const movies = []

    for(var i=0; i<media.length; i++) {
        if(media[i].category === "Movie") {
            movies.push(media[i])
        }
    }

    return (
        <div className="movies mx-auto">
            <SearchForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleChange={handleChange}
                placeholderText='Search for movies'
                arr={movies}
            />
            <div className={(searchTerm==='' ? `block` : `hidden`)}>
                <h2 className="heading text-xl text-white py-4">Movies</h2>
                <Grid arr={movies} />
            </div>
        </div>
    )
}
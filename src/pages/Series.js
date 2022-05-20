import React, {useState} from "react";
import SearchForm from "../components/SearchForm";
import media from "../mediaData.json"
import Grid from "../components/Grid";

export default function Series() {
    const [searchTerm, setSearchTerm] = useState('')
    const handleChange = event => setSearchTerm(event.target.value);

    const series = []

    for(var i=0; i<media.length; i++) {
        if(media[i].category === "TV Series") {
            series.push(media[i])
        }
    }

    return (
        <div className="series mx-auto">
            <SearchForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleChange={handleChange}
                placeholderText='Search for TV series'
                arr={series}
            />
            <div className={(searchTerm==='' ? `block` : `hidden`)}>
                <h2 className="text-xl text-white py-4">TV Series</h2>
                <Grid arr={series} />
            </div>
        </div>
    )
}
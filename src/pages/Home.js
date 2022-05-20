import React, {useState} from "react";
import SearchForm from "../components/SearchForm";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import allTitles from '../mediaData.json';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('')
    const handleChange = event => setSearchTerm(event.target.value);

    for(var i=0; i<allTitles.length; i++) {
        if(allTitles[i].category === "Movie") {
            allTitles[i].icon = '../assets/icon-category-movie.svg'
        }
        if(allTitles[i].category === "TV Series") {
            allTitles[i].icon = '../assets/icon-category-tv.svg'
        }
    }
    
    return (
        <div className="home mx-auto">
            <SearchForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleChange={handleChange}
                placeholderText='Search for movies or TV series'
                arr={allTitles}
            />
            <div className={(searchTerm==='' ? `block` : `hidden`)}>
                <Trending />
                <Recommended />
            </div>
        </div>
    )
}
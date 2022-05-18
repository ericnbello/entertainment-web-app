import React from "react";
import SearchForm from "../components/SearchForm";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import allTitles from '../mediaData.json';

export default function Home() {
    return (
        <div className="home mx-auto">
            <SearchForm
                placeholderText='Search for movies or TV series'
                arr={allTitles}
            />
            <Trending />
            <Recommended />
        </div>
    )
}
import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Row from "../components/Row";
import requests from "../requests";

export default function Home(props) {
    return (
        <div className="home mx-auto">
            <SearchForm />
            <Row title="Trending" url={requests.fetchTrending} />
            <Row title="Top Rated Movies" url={requests.fetchTopRatedMovies} />
            <Row title="Top Rated TV Shows" url={requests.fetchTopRatedSeries} />
        </div>
    )
}
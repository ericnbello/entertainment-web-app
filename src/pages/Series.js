import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Grid from "../components/Grid";
import Row from "../components/Row";
import requests from "../requests";

export default function Series(props) {
    const series = []

    // for(var i=0; i<props.arr.length; i++) {
    //     if(props.arr[i].category === "TV Series") {
    //         series.push(props.arr[i])
    //     }
    // }

    return (
        <div className="series mx-auto">
            {/* <SearchForm
                searchTerm={props.searchTerm}
                setSearchTerm={props.setSearchTerm}
                handleSearch={props.handleSearch}
                placeholderText='Search for TV series'
                arr={series}
            /> */}
            {/* <div className={(props.searchTerm==='' ? `block` : `hidden`)}> */}
                <h2 className="text-2xl text-white py-4">TV Series</h2>
                <Row title="Top Rated" url={requests.fetchTopRatedSeries} />
                <Row title="Action & Adventure" url={requests.fetchActionAdventureSeries} />  
                {/* <Row title="Horror" url={requests.fetchHorrorSeries} />   */}
                <Row title="Comedy" url={requests.fetchComedySeries} />
                <Row title="Romance" url={requests.fetchRomanceSeries} />  
                <Row title="Documentaries" url={requests.fetchDocumentarySeries} />  
                <Row title="Sci-Fi & Fantasy" url={requests.fetchSciFiFantasySeries} />
                <Row title="Westerns" url={requests.fetchWesternSeries} />

                {/* <Grid arr={series} /> */}
            {/* </div> */}
        </div>
    )
}
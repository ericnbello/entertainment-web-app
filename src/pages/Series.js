import React from "react";
import Row from "../components/Row";
import requests from "../requests";

export default function Series(props) {
    return (
        <div className="series mx-auto">
                <h2 className="text-2xl text-white py-4">TV Series</h2>
                {/* <Row title="Popular" url={requests.fetchPopularSeries} /> */}
                <Row title="Action & Adventure" url={requests.fetchActionAdventureSeries} />
                {/* <Row title="Horror" url={requests.fetchHorrorSeries} />   */}
                {/* <Row title="Comedy" url={requests.fetchComedySeries} /> */}
                <Row title="Romance" url={requests.fetchRomanceSeries} />  
                <Row title="Documentaries" url={requests.fetchDocumentarySeries} />  
                <Row title="Sci-Fi & Fantasy" url={requests.fetchSciFiFantasySeries} />
                <Row title="Westerns" url={requests.fetchWesternSeries} /> 
        </div>
    )
}
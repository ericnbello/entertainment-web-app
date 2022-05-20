import React from "react";
import Grid from "./Grid";

export default function SeriesBookmarks(props) {
    return (
        <div className="bookmarked-series mx-auto">
            <h2 class="text-xl text-white py-4">Bookmarked TV Series</h2>
            <Grid arr={props.arr} />
        </div>
    )
}
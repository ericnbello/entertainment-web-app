import React from "react";
import Grid from "./Grid";

export default function MovieBookmarks(props) {
    return (
        <div className="bookmarked-movies mx-auto">
            <h2 className="text-xl text-white py-4">Bookmarked Movies</h2>
            <Grid arr={props.arr} />
        </div>
    )
}
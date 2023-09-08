import React from "react";
import Grid from "./Grid";

export default function Bookmarks(props) {
    return (
        <div className="bookmarked-movies mx-auto">
            <h2 className="text-xl text-white py-4">Bookmarks</h2>
            <Grid arr={props.arr} />
        </div>
    )
}
import React from "react";
import media from '../mediaData.json';
import Grid from "./Grid";

export default function Recommended() {
    const recommended = []
    
    for(var i=0; i<media.length; i++) {
        if(media[i].isTrending === false) {
            recommended.push(media[i])
        }
    }

    return (
        <div className="recommended mx-auto">
            <h2 className="text-xl text-white py-4">Recommended for you</h2>
            {/* <Grid arr={recommended} /> */}
        </div>
    )
}
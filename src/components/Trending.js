import React from "react";
import media from '../mediaData.json';

export default function Trending() {
    const trending = []
    
    for(var i=0; i<media.length; i++) {
        if(media[i].isTrending === true) {
            trending.push(media[i])
        }
    }

    return (
        <div className="trending mx-auto">
            <h2 className="text-xl text-white py-4">Trending</h2>
            <div className="grid grid-rows-1 grid-flow-col overflow-x-auto gap-4 pb-10">
                {trending.map((video) => {
                    return (                    
                        <div className="flex text-sm text-white justify-start relative">
                            <img className="z-0 rounded-lg" src={video.thumbnail.trending.large} alt={video.title}/>
                            <p className="z-10 absolute left-5 bottom-5">
                                <span className="text-sm">{video.year} - {video.category} - {video.rating}</span>
                                <br />
                                <span className="text-lg">{video.title}</span>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
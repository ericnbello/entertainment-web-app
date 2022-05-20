import React from "react";
import {Link} from "react-router-dom";
import media from '../mediaData.json';
import BookmarkIcon from "./icons/BookmarkIcon";
import PlayIcon from "./icons/PlayIcon";

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
            <div className="grid grid-rows-1 grid-flow-col w-full overflow-x-auto gap-4 pb-10">
                {trending.map((video) => {
                    return (                    
                        <div className="flex flex-col text-xl text-white col-span-1 justify-start w-96">
                        <div className="relative z-0">
                            <Link to={`../${video.title.replace(/\W+/g, '-').toLowerCase()}`}>
                                <div className="relative z-10 hover:bg-black hover:opacity-75 group">
                                    <div className="absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 invisible group-hover:visible">
                                         <PlayIcon />
                                    </div>
                                    <img className="rounded-lg" src={video.thumbnail.trending.large} alt={video.title} />
                                </div>
                            </Link>
                            <BookmarkIcon isBookmarked={video.isBookmarked}/>
                        </div>
                        <p className="flex pt-1 text-sm font-light">{video.year} • 
                            <span className="px-2 pt-1"><img src={video.category==="Movie" ? "/assets/icon-category-movie.svg" : "/assets/icon-category-tv.svg"} alt="icon"/></span>
                            {video.category} • {video.rating}</p>
                        <p className="text-lg font-medium">{video.title}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
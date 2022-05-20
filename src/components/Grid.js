import React from "react";
import { Link } from "react-router-dom";
import BookmarkIcon from "../components/icons/BookmarkIcon";
import PlayIcon from "../components/icons/PlayIcon";

export default function Grid(props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
            {props.arr.map((video) => {
                return (
                    <div className="flex flex-col text-xl text-white col-span-1 justify-start">
                        <div className="relative z-0">
                            <Link to={`../${video.title.replace(/\W+/g, '-').toLowerCase()}`}>
                                <div className="relative z-10 hover:bg-black hover:opacity-75 group">
                                    <div className="absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 invisible group-hover:visible">
                                         <PlayIcon />
                                    </div>
                                    <img className="rounded-lg" src={video.thumbnail.regular.large} alt={video.title} />
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
    )
}
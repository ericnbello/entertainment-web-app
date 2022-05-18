import React from "react";

export default function MovieBookmarks(props) {
    return (
        <div className="bookmarked-movies mx-auto">
            <h2 class="text-xl text-white py-4">Bookmarked Movies</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
                {props.arr.map((video) => {
                    return (
                        <div class="relative flex flex-col text-xl text-white col-span-1 justify-start">
                            <img class="rounded-lg relative z-0" src={video.thumbnail.regular.large} alt={video.title} />
                                <span class="absolute z-10 right-2 top-2 bg-black border-4 border-black rounded-full">
                                    <img class="h-2" src="../assets/icon-bookmark-full.svg" alt="bookmark icon" />
                                </span>
                            <p class="text-sm">{video.year} - {video.category} - {video.rating}</p>
                            <p class="text-lg">{video.title}</p>
                        </div>
                    )
                })}                    
            </div>
        </div>
    )
}
import React from "react";
import media from '../mediaData.json';

export default function Recommended() {
    const recommended = []
    
    for(var i=0; i<media.length; i++) {
        if(media[i].isTrending === false 
            && media[i].isBookmarked === false) {
            recommended.push(media[i])
        }
    }

    return (
        <div className="recommended mx-auto">
            <h2 className="text-xl text-white py-4">Recommended for you</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
                {recommended.map((video) => {
                    return (
                        <div className="p-2 mx-auto">
                            <div className="flex flex-col text-sm text-white justify-start">
                                <img className="rounded-lg" src={video.thumbnail.regular.large} alt={video.title} />
                                <p className="text-sm">{video.year} - {video.category} - {video.rating}</p>
                                <p className="text-lg">{video.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
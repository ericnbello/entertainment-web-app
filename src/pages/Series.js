import React from "react";
import SearchForm from "../components/SearchForm";
import media from "../mediaData.json"

export default function Series() {
    const series = []

    for(var i=0; i<media.length; i++) {
        if(media[i].category === "TV Series") {
            series.push(media[i])
        }
    }

    return (
        <div className="series mx-auto">
            <SearchForm
                placeholderText='Search for TV series'
                arr={series}
            />
            <h2 className="text-xl text-white py-4">TV Series</h2>
            <div id="series-grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
                {series.map((video) => {
                    return (
                        <div className="flex flex-col text-xl text-white col-span-1 justify-start">
                            <img className="rounded-lg" src={video.thumbnail.regular.large} alt={video.title} />
                            <p className="text-sm">{video.year} - {video.category} - {video.rating}</p>
                            <p className="text-lg">{video.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
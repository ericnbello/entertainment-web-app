import React, { useState, useEffect } from "react";
import media from '../mediaData.json';
// import Grid from "./Grid";
<<<<<<< HEAD
import axios from 'axios'
import Row from './Row'
=======
import BookmarkIcon from "./icons/BookmarkIcon";
import PlayIcon from "./icons/PlayIcon";
>>>>>>> ebae74b (added analytics navbar icon)

export default function Trending() {
    const trending = []
    
    for(var i=0; i<media.length; i++) {
        if(media[i].isTrending === true) {
            trending.push(media[i])
        }
    }

    const [trendingList, setTrendingList] = useState([])
    const trendingListArr = []
    
    // useEffect(() => {
    //     // axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDb_API_KEY}`)
    //     axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=0c7b0d279c441dec486b8bf4ee392304&language=en-US`)
    //       .then((response) => {
    //         setTrendingList(response.data.results);
    //         trendingListArr.push(response.data.results)
    //         console.log(trendingList)
    //         console.log(trendingListArr)
    //       })
    //       // .catch((error) => {
    //       //   setError(error.error)
    //       //   console.log(error)
    //       // })
    //   }, []);
    //   if (!trendingList) return null;

    return (
        <div className="trending mx-auto">
            <h2 className="text-xl text-white py-4">Trending</h2>
<<<<<<< HEAD
            <Row arr={trendingList} />
=======
            <div className="grid grid-rows-1 grid-flow-col w-full overflow-x-auto gap-4 pb-10 scrollbar-hide">
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
>>>>>>> ebae74b (added analytics navbar icon)
        </div>
    )
}
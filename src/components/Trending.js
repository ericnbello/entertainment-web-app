import React, { useState, useEffect } from "react";
import media from '../mediaData.json';
// import Grid from "./Grid";
import axios from 'axios'
import Row from './Row'

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
            <Row arr={trendingList} />
        </div>
    )
}
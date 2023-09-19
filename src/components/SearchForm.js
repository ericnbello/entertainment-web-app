import React, { useState, useEffect } from 'react'
import Grid from "../components/Grid";
import axios from '../axios';

export default function SearchForm() {
    // const API_KEY = process.env.REACT_APP_TMDb_API_KEY;
    // const [searchTerm, setSearchTerm] = useState('');
    // const handleSearch = e => setSearchTerm(e.target.value);

    // const [titlesFound, setTitlesFound] = useState([])
    // const titlesFoundArr = []

    // useEffect(() => {
    //     axios.get(`/search/multi?api_key=${API_KEY}&language=en-US&query=${searchTerm}&region=US`)
    //     .then((response) => {
    //         // for(let i=0; i<5; i++) {

    //         // }
    //         setTitlesFound(response.data.results)
    //         console.log(titlesFound)
    //         console.log(response.data)
    //     })
    // }, [])

    // titlesFound.forEach((title) => {
    //     if(title.media_type == "person" || title.poster_path == null)
    //         return false;
    //     else 
    //         titlesFoundArr.push(title);
    // })

    return (
        <div className="flex py-6 gap-x-2 w-full">
            {/* <div className="text-white">
                <label className="items-center">
                    <button className="">
                        <img className="h-4 pr-2 " src="../../assets/icon-search.svg" alt="search icon"/>
                    </button>
                </label>
                <input 
                    className="bg-darkBlue text-greyishBlue border-none w-64" 
                    style={{color: 'white'}}
                    type="text" 
                    placeholder="Search for movies or TV series" 
                    onChange={handleSearch}
                    required
                />
                <div className={searchTerm==="" ? `hidden` : `block`}>
                    <p className="py-4">
                        Found {titlesFoundArr.length} results for '{searchTerm}'
                    </p>
                    <Grid arr={titlesFoundArr} />
                </div>
            </div> */}
        </div>
    )
}
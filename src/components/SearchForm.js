import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import axios from '../axios';
import requests from "../requests";
const API_KEY = process.env.REACT_APP_TMDb_API_KEY

export default function SearchForm(props) {
    const [titlesFound, setTitlesFound] = useState([])
    // const responseArr = []
    const titlesFoundArr = []

    useEffect(() => {
        axios.get(props.fetchSearchResultsUrl)
        .then((response) => {
            setTitlesFound(response.data)
            console.log(titlesFound)
            titlesFoundArr.push(response.data)
            console.log(titlesFoundArr)
        })
    }, [])

    let searchResults = titlesFoundArr.filter((val)=>{
        if(props.searchTerm === ""){
            return "";
        }
        else if(val.title == null ? val.name : (val.title != null ? val.title : val.original_name).toLowerCase().includes(props.searchTerm.toLowerCase())){
            titlesFoundArr.push(val);
            return val;
        }
        return false;
    })
    console.log(searchResults)

    return (
        <div className="flex py-6 gap-x-2 w-full">
            <div className="">
                <label className="items-center">
                    <button className="">
                        <img className="h-4 pr-2 " src="../../assets/icon-search.svg" alt="search icon"/>
                    </button>
                </label>
                <input 
                    className="bg-darkBlue text-greyishBlue border-none w-64" 
                    style={{color: 'white'}}
                    type="text" 
                    placeholder={props.placeholderText}  
                    onChange={props.handleSearch}
                    required
                />
                <div className={props.searchTerm==="" ? `hidden` : `flex`}>
                    <p className="py-4">
                        Found {titlesFoundArr.length} results for '{props.searchTerm}'
                    </p>
                </div>   
                
                <Grid arr={searchResults} />
            </div>
        </div>
    )
}
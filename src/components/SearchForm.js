import React from "react";
import Grid from "./Grid";

export default function SearchForm(props) {
    const titlesFound = []

    let searchResults = props.arr.filter((val)=>{
        if(props.searchTerm === ""){
            return "";
        }
        else if(val.title.toLowerCase().includes(props.searchTerm.toLowerCase())){
            titlesFound.push(val);
            return val;
        }
        return false;
    })

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
                        Found {titlesFound.length} results for '{props.searchTerm}'
                    </p>
                </div>   
                
                <Grid arr={searchResults} />
            </div>
        </div>
    )
}
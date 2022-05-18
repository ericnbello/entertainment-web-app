import React, { useState } from "react";

export default function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useState('')

    const numTitlesFound = []
    const searchResults = props.arr.filter((val)=>{
        if(searchTerm === ""){
            return "";
        }
        else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            numTitlesFound.push(val);
            return val;
        }
    })

    return (
        <div className="flex py-6 gap-x-2 w-full">
            <div className="">
                <div className="">
                <label className="items-center">
                    <button className="">
                        <img className="h-4 pr-2 " src="../../assets/icon-search.svg" alt="search icon"/>
                    </button>
                </label>
                <input 
                    className="bg-darkBlue text-greyishBlue border-none w-96" 
                    style={{color: 'white'}}
                    type="text" 
                    placeholder={props.placeholderText}  
                    onChange={e=>setSearchTerm(e.target.value)}
                    required
                />
                <div className={searchTerm==="" ? `hidden` : `flex`}>
                    <p className="">
                        Found {numTitlesFound.length} results for '{searchTerm}'
                    </p>
                </div>   
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 pb-100">
                    {searchResults.map((val)=>{
                        return (
                            <div className="flex flex-col text-xl text-white col-span-1 justify-start">
                                <img className="rounded-lg" src={val.thumbnail.regular.large} alt={val.title} />
                                <p className="text-sm">{val.year} - {val.category} - {val.rating}</p>
                                <p className="text-lg">{val.title}</p>
                            </div>
                        )
                    })}                 
                </div> 
            </div>
        </div>
    )
}
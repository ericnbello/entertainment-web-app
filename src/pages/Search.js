import React, { useState, useEffect } from 'react'
import Grid from "../components/Grid";
import axios from '../axios';
import SearchForm from '../components/SearchForm';

export default function Search() {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = e => setSearchTerm(e.target.value);

    const [titlesFound, setTitlesFound] = useState([])
    const titlesFoundArr = []

    useEffect(() => {
        axios.get(`/search/multi?api_key=${API_KEY}&language=en-US&query=${searchTerm}&region=US`)
        .then((response) => {
            setTitlesFound(response.data.results);
            console.log(titlesFound);
            console.log(response.data);
        })
    }, [searchTerm]);
    

    titlesFound.forEach((title) => {
        if(title.media_type == "person" || title.poster_path == null)
            return false;
        else 
            titlesFoundArr.push(title);
    })

    return (
        <div className="search mx-auto">
            <h2 className="text-2xl text-white py-4">Search</h2>
            {/* <SearchForm /> */}
            <div className="text-white">
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
            </div>
        </div>
    )
}

// import React, { useState, useEffect } from 'react';
// import Grid from "../components/Grid";
// import axios from '../axios';

// export default function Search() {
//     const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
//     const [searchTerm, setSearchTerm] = useState('');
//     const [titlesFound, setTitlesFound] = useState([]);

//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     }

//     useEffect(() => {
//         if (searchTerm.trim() !== '') {
//             axios.get(`/search/multi?api_key=${API_KEY}&language=en-US&query=${searchTerm}&region=US`)
//             .then((response) => {
//                 const filteredTitles = response.data.results.filter(title => (
//                     title.media_type !== "person" && title.poster_path !== null
//                 ));
//                 setTitlesFound(filteredTitles);
//             })
//             // .catch((error) => {
//             //     console.error(error);
//             // });
//         } else {
//             setTitlesFound([]);
//         }
//     }, [searchTerm, API_KEY]);

//     return (
//         <div className="search mx-auto">
//             <h2 className="text-2xl text-white py-4">Search</h2>
//             <div className="text-white">
//                 <label className="items-center">
//                     <button className="">
//                         <img className="h-4 pr-2 " src="../../assets/icon-search.svg" alt="search icon"/>
//                     </button>
//                 </label>
//                 <input 
//                     className="bg-darkBlue text-greyishBlue border-none w-64" 
//                     style={{color: 'white'}}
//                     type="text" 
//                     placeholder="Search for movies or TV series" 
//                     onChange={handleSearch}
//                     required
//                 />
//                 {titlesFound.length > 0 && (
//                     <div>
//                         <p className="py-4">
//                             Found {titlesFound.length} results for '{searchTerm}'
//                         </p>
//                         <Grid arr={titlesFound} />
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }
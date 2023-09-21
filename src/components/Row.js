// import React, { useState, useEffect } from "react";
// import {Link} from "react-router-dom";
// import BookmarkIcon from "./icons/BookmarkIcon";
// import PlayIcon from "./icons/PlayIcon";
// import axios from "../axios";
// import app from '../firebase-config'
// import database from '../firebase-config'
// import { getDatabase, ref, serverTimestamp, set } from "firebase/database";

// export default function Row ({title, url}) {
//     const [media, setMedia] = useState([])
//     // const [error, setError] = useState()
//     const mediaArr = []    
    
//     // useEffect(() => {

//     //     axios.get(url)
//     //       .then((response) => {
//     //         setMedia(response.data.results);
//     //         // setMedia(response.data.results + (response.data.results['id']['timestamp'].push(timestamp)));
//     //         // mediaArr.push(response.data.results)
//     //         // console.log(mediaArr)
//     //         // media['timestamp'].push(timestamp);
//     //         console.log(media)
//     //         // console.log(timestamp)
//     //         // console.log(mediaArr)
//     //       })
//     //     //   .catch((error) => {
//     //     //     setError(error.error)
//     //     //     console.log(error)
//     //     //   })
//     //       // eslint-disable-next-line
//     //   }, [media]);

//     // function writeMediaData(result, mediaId, year, name, description, category, imageUrl) {
//     //     const db = getDatabase();
//     //     set(ref(db, 'media/' + result), {
//     //         id: mediaId,
//     //         release_year: year,
//     //         title: name,
//     //         overview: description,
//     //         media_type: category,
//     //         poster_path: imageUrl,
//     //         // timestamp
//     //     });
//     // }

//     useEffect(() => {
//         axios.get(url)
//           .then((response) => {
//             setMedia(response.data.results);
//             response.data.results.forEach(video => {
//                 writeMediaData(
//                     video.id, 
//                     video.id, 
//                     ((video.first_air_date == null ? video.release_date : video.first_air_date).substring(0,4)),
//                     (video.title == null ? video.name : (video.title != null ? video.title : video.original_name)), 
//                     video.overview,
//                     (video.media_type == null ? '' : video.media_type == "movie" ? ((video.media_type).charAt(0).toUpperCase() + (video.media_type).slice(1)) : (video.media_type).toUpperCase()),
//                     video.poster_path,
//                 );
//             });
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//     }, [url]);

//     function writeMediaData(mediaId, year, name, description, category, imageUrl) {
//         const db = getDatabase();
//         set(ref(db, 'media/' + mediaId), {
//             id: mediaId,
//             release_year: year,
//             title: name,
//             overview: description,
//             media_type: category,
//             poster_path: imageUrl,
//             timestamp: serverTimestamp() // Use serverTimestamp to get the server time
//         });
//     }
      
//     return (
//         <div className="mx-auto">
//             <h2 className="text-xl text-white py-4">{title}</h2>
//             <div className="grid grid-rows-1 grid-flow-col w-full overflow-x-auto gap-4 pb-10 scrollbar-hide">
//                 {media.map((video, idx) => {
//                     // writeMediaData(
//                     //     video.id, 
//                     //     video.id, 
//                     //     ((video.first_air_date == null ? video.release_date : video.first_air_date).substring(0,4)),
//                     //     (video.title == null ? video.name : (video.title != null ? video.title : video.original_name)), 
//                     //     video.overview,
//                     //     (video.media_type == null ? '' : video.media_type == "movie" ? ((video.media_type).charAt(0).toUpperCase() + (video.media_type).slice(1)) : (video.media_type).toUpperCase()),
//                     //     video.poster_path,
//                     // )
                    
//                     return (                    
//                         <div key={video.id} className="flex flex-col text-xl text-white col-span-1 justify-start w-48">
//                             <div className="relative z-0">
//                                 <Link to={`../${video.title == null ? (video.name).replace(/\W+/g, '-').toLowerCase() : video.title != null ? (video.title).replace(/\W+/g, '-').toLowerCase() : (video.original_name).replace(/\W+/g, '-').toLowerCase()}`}>
                                    
//                                     {/* // video.title === null ? (video.name.replace(/\W+/g, '-').toLowerCase()) : (video.title.replace(/\W+/g, '-').toLowerCase())}`}> */}
//                                     <div className="relative z-10 hover:bg-black hover:opacity-75 group">
//                                         <div className="absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 invisible group-hover:visible">
//                                             <PlayIcon />
//                                         </div>
//                                         <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w185${video.poster_path}`} alt={video.title == null ? video.name : video.title} />
//                                     </div>
//                                 </Link>
//                                 {/* <BookmarkIcon isBookmarked={video.isBookmarked}/> */}
//                                 <p></p>
//                             </div>
//                             <div className="flex flex-col flex-wrap py-2">
//                                 <p className="text-lg font-medium">{video.title == null ? video.name : video.title}</p>
//                                 <p className="flex pt-1 text-sm font-light">
//                                     {(video.first_air_date == null ? video.release_date : video.first_air_date).substring(0,4)} 
//                                     {/* {(video.first_air_date == null ? video.release_date : video.first_air_date)} */}
//                                     {/* <span className="px-2 pt-1">
//                                         <div wrapper="span" className="flex">
//                                             <img src={video.media_type === null ? '' : video.media_type === "movie" ? "/assets/icon-category-movie.svg" : "/assets/icon-category-tv.svg" } alt="" />
//                                             <p>
//                                                 {video.media_type === null ? '' : video.media_type === "movie" ? ((video.media_type).charAt(0).toUpperCase() + (video.media_type).slice(1)) : (video.media_type).toUpperCase() }
//                                             </p>
//                                         </div>
//                                     </span> */}
//                                 </p>
//                             </div>
//                         </div>
//                     )
//                 })}

//                 {/* {trending.map((video, idx) => {
//                         return (                    
//                             <div key={idx} className="flex flex-col text-xl text-white col-span-1 justify-start w-96">
//                             <div className="relative z-0">
//                                 <Link to={`../${video.title.replace(/\W+/g, '-').toLowerCase()}`}>
//                                     <div className="relative z-10 hover:bg-black hover:opacity-75 group">
//                                         <div className="absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 invisible group-hover:visible">
//                                             <PlayIcon />
//                                         </div>
//                                         <img className="rounded-lg" src={video.thumbnail.trending.large} />
//                                     </div>
//                                 </Link>
//                                 <BookmarkIcon isBookmarked={video.isBookmarked}/>
//                             </div>
//                             <p className="flex pt-1 text-sm font-light">{video.year} • 
//                                 <span className="px-2 pt-1"><img src={video.category==="Movie" ? "/assets/icon-category-movie.svg" : "/assets/icon-category-tv.svg"} alt="icon"/></span>
//                                 {video.category} • {video.rating}</p>
//                             <p className="text-lg font-medium">{video.title}</p>
//                         </div>
//                         )
//                     })} */}
//             </div>
//         </div>
//     )
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlayIcon from "./icons/PlayIcon";
import axios from "../axios";
import { getDatabase, ref, set, serverTimestamp } from "firebase/database";

export default function Row({ title, url }) {
  // const timestamp = Date.now();
  const [media, setMedia] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMedia(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  function writeMediaData(
    mediaId,
    year,
    name,
    description,
    category,
    imageUrl
  ) {
    const db = getDatabase();
    set(ref(db, "media/" + mediaId), {
      id: mediaId,
      release_year: year,
      title: name,
      overview: description,
      media_type: category,
      poster_path: imageUrl,
      createdAt: {".sv": "timestamp"} // Set a server timestamp
    });
  }

  useEffect(() => {
    media.forEach((video) => {
      writeMediaData(
        video.id,
        // video.id,
        (video.first_air_date == null
            ? (
                video.release_date == null
                ? (video.release_year == null ? '' : video.release_year)
                : video.release_date
              )
            : video.first_air_date).substring(0, 4),
        video.title == null ? video.name : video.title,
        video.overview,
        video.media_type === "movie"
            ? "Movie"
            : video.media_type === "tv" || video.media_type === "show"
            ? "TV"
            : "",
        video.poster_path,
      );
    });
  }, [media]);

  return (
    <div className="mx-auto">
      <h2 className="text-xl text-white py-4">{title}</h2>
      <div className="grid grid-rows-1 grid-flow-col w-full overflow-x-auto gap-4 pb-10 scrollbar-hide">
        {media.map((video) => (
          <div key={video.id} className="flex flex-col text-xl text-white col-span-1 justify-start w-48">
            <div className="relative z-0">
              <Link
                to={`../${
                  video.title == null
                    ? video.name.replace(/\W+/g, "-").toLowerCase()
                    : video.title != null
                    ? video.title.replace(/\W+/g, "-").toLowerCase()
                    : video.original_name.replace(/\W+/g, "-").toLowerCase()
                }`}
              >
                <div className="relative z-10 hover:bg-black hover:opacity-75 group">
                  <div className="absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 invisible group-hover:visible">
                    <PlayIcon />
                  </div>
                  <img
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/w185${video.poster_path}`}
                    alt={video.title == null ? video.name : video.title}
                  />
                </div>
              </Link>
            </div>
            <div className="flex flex-col flex-wrap py-2">
              <p className="text-lg font-medium">{video.title == null ? video.name : video.title}</p>
              <p className="flex pt-1 text-sm font-light">
                {(video.first_air_date == null
                  ? video.release_date
                  : video.first_air_date
                ).substring(0, 4)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
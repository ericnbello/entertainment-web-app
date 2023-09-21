// import React from "react";
// import { Link } from "react-router-dom";
// import BookmarkIcon from "../components/icons/BookmarkIcon";
// import PlayIcon from "../components/icons/PlayIcon";
// import { getDatabase, ref, set, remove, serverTimestamp } from "firebase/database";
// // import { Timestamp } from "@google-cloud/firestore";

// export default function Grid(props) {
//     var timestamp = Date.now();

//     function writeMediaData(result, mediaId, year, name, description, category, imageUrl) {
//     const db = getDatabase();
//     set(ref(db, 'media/' + result), {
//         id: mediaId,
//         release_year: year,
//         title: name,
//         overview: description,
//         media_type: category,
//         poster_path: imageUrl,
//         // timestamp
//         });
//     }

//     // function deleteMediaData(result, mediaId, year, name, description, category, imageUrl) {
//     //     const db = getDatabase();
//     //     remove(ref(db, 'media/' + result), {
//     //         id: mediaId,
//     //         release_year: year,
//     //         title: name,
//     //         overview: description,
//     //         media_type: category,
//     //         poster_path: imageUrl
//     //     });
//     // }

//     return (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 pb-10">
//             {props.arr.map((video, idx) => {
//                  writeMediaData(
//                     video.id, 
//                     video.id, 
//                     ((video.first_air_date == null ? video.release_date : video.first_air_date).substring(0,4)),
//                     (video.title == null ? video.name : (video.title != null ? video.title : video.original_name)),
//                     video.overview, 
//                     (video.media_type == null ? '' : video.media_type == "movie" ? ((video.media_type).charAt(0).toUpperCase() + (video.media_type).slice(1)) : (video.media_type).toUpperCase()),
//                     video.poster_path,
//                     // timestamp
//                 )
                
//                 return (                    
//                     <div key={video.id} className="flex flex-col text-xl text-white col-span-1 justify-start w-48">
//                         <div className="relative z-0">
//                             <Link to={`../${video.title == null ? (video.name.replace(/\W+/g, '-').toLowerCase()) : (video.title.replace(/\W+/g, '-').toLowerCase())}`}>
//                                 <div className="relative z-10 hover:bg-black hover:opacity-75 group">
//                                     <div className="absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 invisible group-hover:visible">
//                                         <PlayIcon />
//                                     </div>
//                                     <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w185${video.poster_path}`} alt={video.title == null ? video.name : video.title} />
//                                 </div>
//                             </Link>
//                             {/* <BookmarkIcon isBookmarked={video.isBookmarked}/> */}
//                             <p></p>
//                         </div>
//                         <div className="flex flex-col flex-wrap py-2">
//                             {/* <p className="flex pt-1 text-sm font-light">{video.first_air_date} • 
//                             <span className="px-2 pt-1"><img src={video.media_type==="movie" ? "/assets/icon-category-movie.svg" : "/assets/icon-category-tv.svg"} alt="icon"/></span>
//                             {video.media_type}</p> */}
//                             <p className="text-lg font-medium">{video.title == null ? video.name : video.title}</p>
//                         </div>
//                         <p className="flex flex-wrap pt-1 text-xs md:text-sm font-light">{video.year == null ? '' : `• ${video.year}`} 
//                             {/* <span className="px-2 pt-1"><img src={video.category==="Movie" ? "/assets/icon-category-movie.svg" : "/assets/icon-category-tv.svg"} alt="icon"/></span> */}
//                             {video.category} {video.rating == null ? '' : `• ${video.rating}`}</p>
//                         {/* <p className="text-lg font-medium">{video.title}</p> */}
//                     </div>
//                 )
//             })};

//             {/* {props.arr.map((video, idx) => {
//                 deleteMediaData(
//                     video.id, 
//                     video.id, 
//                     ((video.first_air_date == null ? video.release_date : video.first_air_date).substring(0,4)),
//                     (video.title == null ? video.name : (video.title != null ? video.title : video.original_name)),
//                     video.overview, 
//                     (video.media_type == null ? '' : video.media_type == "movie" ? ((video.media_type).charAt(0).toUpperCase() + (video.media_type).slice(1)) : (video.media_type).toUpperCase()),
//                     video.poster_path)
//                 })}; */}

//         </div>
//     )
// }

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PlayIcon from "../components/icons/PlayIcon";
import { getDatabase, ref, set, serverTimestamp } from "firebase/database";

export default function Grid(props) {
  useEffect(() => {
    props.arr.forEach((video) => {
      writeMediaData(
        video.id,
        video.id,
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
        video.poster_path
      );
    });
  }, [props.arr]);

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

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 pb-10">
      {props.arr.map((video) => (
        <div key={video.id} className="flex flex-col text-xl text-white col-span-1 justify-start w-48">
          <div className="relative z-0">
            <Link
              to={`../${
                video.title == null
                  ? video.name.replace(/\W+/g, "-").toLowerCase()
                  : video.title.replace(/\W+/g, "-").toLowerCase()
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
            <p className="text-lg font-medium">
              {video.title == null ? video.name : video.title}
            </p>
          </div>
          <p className="flex flex-wrap pt-1 text-xs md:text-sm font-light">
            {video.year == null ? "" : `• ${video.year}`} {video.category}{" "}
            {video.rating == null ? "" : `• ${video.rating}`}
          </p>
        </div>
      ))}
    </div>
  );
}
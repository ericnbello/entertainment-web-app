import React, {useState} from "react";

const BookmarkIcon = (props) => {
    const [isBookmarked, setBookmarked] = useState(props.isBookmarked);
    const [addBookmark, setAddBookmark] = useState(isBookmarked)
    
    return (
        <span className="absolute z-10 right-2 top-2 bg-black opacity-50 border-6 border-black rounded-full px-2">
            <button className="" onClick={() => {
                                    setBookmarked(!isBookmarked); 
                                    setAddBookmark(!addBookmark);
                                }}>
                <img src={(isBookmarked===false ? `/assets/icon-bookmark-empty.svg` : `/assets/icon-bookmark-full.svg`)} alt="bookmark icon"/>
            </button>
        </span>
    )
}

export default BookmarkIcon
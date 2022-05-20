import React from "react";

export default function PlayIcon () {
    return (
        <div className="flex gap-4 justify-between items-center py-1 px-3 bg-white bg-opacity-30 rounded-3xl">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" className="currentColorFill">
                <path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF" className=""/>
            </svg>
            <p className="text-sm">Play</p>
        </div>
    )
}
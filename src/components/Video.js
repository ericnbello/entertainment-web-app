import React from "react";

export default function Video(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.image} alt={`${props.title} thumbnail`}/>
        </div>
    )
}
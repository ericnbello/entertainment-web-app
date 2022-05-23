import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Video(props){
    let navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate(`/${props.link}`)
        }

        if (!authToken) {
            navigate('/login')
        }
        
    }, [])

    return (
        <div className="mx-auto text-white">
            <h1 className="heading text-xl py-4">{props.title}</h1>
            <img className="py-6" src={props.image} alt={`${props.title} thumbnail`}/>
            <p className="text-lg">Category: {props.category}</p>
            <p className="text-lg">Release year: {props.year}</p>
            <p className="text-lg">Rating: {props.rating}</p>
        </div>
    )
}
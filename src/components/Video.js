import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import requests from "../requests";
import Row from "./Row";
import axios from '../axios'

export default function Video(props){
    let navigate = useNavigate();
    const [similarMovies, setSimilarMovies] = useState([])
    const [similarSeries, setSimilarSeries] = useState([])

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate(`/${props.link}`)
        }

        if (!authToken) {
            navigate('/login')
        }

        axios.get(`/movie/${props.id}/similar?api_key=${requests.API_KEY}&language=en-US&page=1`)
            .then((response) => {
                setSimilarMovies(response.data.results)
            })
        
    }, [])

    return (
        <div className="mx-auto text-white">
            <h1 className="heading text-xl py-4">{props.title}</h1>
            <img className="py-6" src={props.image} alt={`${props.title} thumbnail`}/>
            <p className="text-lg">Category: {props.category}</p>
            <p className="text-lg">Release year: {props.year}</p>
            <p className="text-lg">Rating: {props.rating}</p>

            <Row title="Similar Movies" url={`/movie/${props.id}/similar?api_key=${requests.API_KEY}&language=en-US&page=1`} />
        </div>
    )
}
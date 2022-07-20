import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import requests from "../requests";
import Row from "./Row";
import axios from '../axios'

export default function Video(props){
    let navigate = useNavigate();
    const API_KEY = process.env.REACT_APP_TMDb_API_KEY;

    const [externalId, setExternalId] = useState('')
    const [externalIdMovie, setExternalIdMovie] = useState('')
    const [externalIdSeries, setExternalIdSeries] = useState('')
    const [trailer, setTrailer] = useState('')

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
    }, [])

    useEffect(() => {
        if(props.category === "movie") {
            axios.get(`/movie/${props.id}/external_ids?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                setExternalIdMovie(response.data.results)
                console.log(externalIdMovie)
            })
        }
        else {
            axios.get(`/tv/${props.id}/external_ids?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                setExternalIdSeries(response.data.results)
                console.log(externalIdSeries)
            })
        }
    }, [])

    useEffect(() => {
        // axios.get(`/find/${props.category == "movie" ? externalIdMovie : externalIdSeries}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`)
        axios.get(`/movie/${externalIdMovie}/videos?api_key=${API_KEY}`)
        .then((response) => {
            setTrailer(response.data.results.id)
            console.log(trailer)
        })
    }, [])

    // axios.get(`/movie/${props.id}/similar?api_key=${requests.API_KEY}&language=en-US&page=1`)
    //         .then((response) => {
    //             setSimilarMovies(response.data.results)
    //     })

    return (
        <div className="mx-auto text-white">
            <h1 className="heading text-xl py-4">{props.title}</h1>
            {/* <video src={trailer} /> */}
            <p>{trailer}</p>
            <img className="py-6" src={props.image} alt={`${props.title} thumbnail`}/>
            {/* <p className="text-lg">Category: {props.category}</p> */}
            <p className="text-lg">Release year: {props.year}</p>
            <p className="text-lg">Overview: {props.overview}</p>

            {/* <Row title="Similar Movies" url={`/movie/${props.id}/similar?api_key=${requests.API_KEY}&language=en-US&page=1`} /> */}
        </div>
    )
}
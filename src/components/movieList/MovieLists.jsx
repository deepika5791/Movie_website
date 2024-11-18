import React,{useEffect , useState} from 'react'
import "./MovieLists.css"
import { useParams } from "react-router-dom"
import Carts from '../cart/Carts'

const MovieLists = () => {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
    getData()
    }, [])

    useEffect(() => {
    getData()
    }, [type])

    const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(res => res.json())
    .then(data => setMovieList(data.results))
    }

    return (
    <div>
    <div className="movie__list">
    <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
    <div className="list__cards">
    {
    movieList.map(movie => (
    <Carts movie={movie} />
    ))
    }
    </div>
    </div>
    </div>
    )
}

export default MovieLists
import { useState, useEffect } from 'react'
import { get } from '../data/httpClient'
import { MovieCard } from "../components/MovieCard"
import "../components/ContextMovieCard.css"

//aqui ira cada pelicula
export function ContextMovieCard() {
  const [movies, setMovies] = useState([])


  //se cargara los datos
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results)
      console.log(data)

    })


  }, [])//para que sea una sola ves


  return (
    <ul className='container'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />


      ))}
    </ul>
  )


}

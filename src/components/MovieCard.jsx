//import "../components/MovieCard.css";
import styles from '../components/MovieCard.module.css'
//los estilos solo afecta a la mmoviecard

import {Link} from 'react-router-dom'
//represnta cada pelicula
export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  /*
  ejemplo de como debe ser la url 
  https://image.tmdb.org/t/p/w300/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg
  
   */
  return (
    <li className={styles.movieCard}>
      {/* se configuro en router para que sea /movies, y tambien pide el 
      movie.id 
      */}
      <Link to={"/movies/"+movie.id}>{/* cuando haga click sobre la imagen se va al detalle */}
      <img className="movieImage" width={230} height={345} src={imageUrl} alt={movie.title} />
      </Link>
      <div className={styles.title}>{movie.title}</div>
    </li>
  );
}

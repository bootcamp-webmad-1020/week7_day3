import './MovieCard.css'

const MovieCard = ({ title, director, deleteMovie, hasOscar }) => {

    return (
        <article className="movie-card">
            <h3>{title}</h3>
            <p>{director}</p>
            <small>{hasOscar ? '¡Tuvo Oscar!' : 'No tuvo Oscar'}</small>
            <hr></hr>
            <button onClick={deleteMovie}>Eliminar película</button>
        </article>
    )
}

export default MovieCard
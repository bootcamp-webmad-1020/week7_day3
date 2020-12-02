import React, { Component } from 'react'

import { movies as fakeMoviesFromFakeApi } from './../../fakeApi'

import MovieCard from './MovieCard'
import MoviesForm from './NewMovieForm'

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: fakeMoviesFromFakeApi,
            showOscarAwarded: true
        }
    }

    removeMovie = movieIdToDelete => {
        this.setState({
            movies: this.state.movies.filter(elm => elm._id != movieIdToDelete)
        })
    }


    insertNewMovie = newMovie => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.push(newMovie)
        this.setState({ movies: moviesCopy })
    }


    render() {


        return (

            <section>

                <h2>Crear una nueva película</h2>

                <MoviesForm addMovie={this.insertNewMovie} />

                <h2>Listado de películas</h2>

                {this.state.movies.map(elm => <MovieCard key={elm._id} {...elm} deleteMovie={() => this.removeMovie(elm._id)} />)}

            </section>
        )
    }
}

export default MoviesList
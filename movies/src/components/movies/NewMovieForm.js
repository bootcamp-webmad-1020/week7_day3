import React, { Component } from 'react'


export default class MovieForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            director: '',
            hasOscars: false,
            rating: ''
        }
    }

    // handleDirectorChange = e => this.setState({ director: e.target.value })
    // handleTitleChange = e => this.setState({ title: e.target.value })
    // handleRatingChange = e => this.setState({ rating: e.target.value })
    // handleOscarChange = e => this.setState({ hasOscars: e.target.checked })

    handleInputChange = e => {

        const { name } = e.target
        const value = e.target.type === 'checkbox' ? e.target.checked : e.taget.value

        this.setState({ [name]: value })            // computed property names
    }

    handleFormSubmit = e => {
        e.preventDefault()

        // validation
        this.props.addMovie(this.state)
        this.setState({
            title: '',
            director: '',
            hasOscars: false,
            rating: ''
        })
    }

    render() {

        console.log(this.props)

        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Título:</label><br />
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                <br /><br />

                <label>Director:</label><br />
                <input type="text" name="director" value={this.state.director} onChange={this.handleInputChange} />
                <br /><br />

                <label>Oscar?:</label><br />
                <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={this.handleInputChange} />
                <br /><br />

                <label>Puntuación:</label><br />
                <input type="text" name="rating" value={this.state.rating} onChange={this.handleInputChange} />
                <br /><br />

                <input type="submit" value="Crear película" />
            </form>
        )
    }
}
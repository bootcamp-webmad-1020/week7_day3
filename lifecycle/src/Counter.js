import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = { count: 0 }
    }

    count = () => {
        console.log('CONTANDOOOOO')
        let value = this.state.count
        let newValue = value + 1
        this.setState({ count: newValue })
    }

    componentDidMount = () => this.interval = setInterval(this.count, 1000)
    componentWillUnmount = () => clearInterval(this.interval)


    render() {
        return <h1> {this.state.count}</h1>
    }
}

export default Counter
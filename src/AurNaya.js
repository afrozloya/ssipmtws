import React, { Component } from 'react'

export default class AurNaya extends Component {
    state = {
        name: '',
        surname: ''
    }
    onChangeHand = (e)  => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Welcolme {this.state.name} {this.state.surname}</h1>
            <input name="name" value={this.state.name}
            onChange={this.onChangeHand}
            />
            <input name="surname" value={this.state.surname}
            onChange={this.onChangeHand}
            />
            </div>
        )
    }
}

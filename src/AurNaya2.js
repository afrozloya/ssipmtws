import React, { Component } from 'react'

export default class AurNaya2 extends Component {
    state = {
        articles: [
            {"title": "SSIPMT placement....."},
            {"title": "SSIPMT workshop....."},
            {"title": "SSIPMT results....."},
        ],
        si: '',
        filteredArt: []
    }
    componentDidMount(){
        this.setState({
            filteredArt: this.state.articles
        })
    }
    onChangeHand = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        var siRegex = new RegExp(e.target.value, "i")
        var tempFilArt = []
        this.state.articles.forEach(a1 => {
            if(a1.title.search(siRegex)!=-1){
                tempFilArt.push(a1)
            }
        })
        this.setState({
            filteredArt: tempFilArt
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome!!</h1>
                <input 
                name="si"
                value={this.state.si}
                onChange={this.onChangeHand}
                />
                {
                    this.state.filteredArt.map(a1 => <p>{a1.title}</p>)
                }
            </div>
        )
    }
}

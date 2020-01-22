import React, { Component } from 'react'

export default class Naya extends Component {
    state = {
        articles: [
            {"title": "Modi ji bla bla"},
            {"title": "Modi ji said...."},
            {"title": "Modi in 2024"},
            {"title": "Nirav Modi ....... "},
        ],
        filteredArt:[],
        si: ""
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
        var filteredArt = []
        var si_regex = new RegExp(e.target.value, "i")
        console.log(si_regex)
        this.state.articles.forEach(a1 => {
            if(a1.title.search(si_regex)!=-1){
                filteredArt.push(a1)
            }
        })
        this.setState({
            filteredArt: filteredArt
        })
    }


    render() {
        return (
            <div>
                <input name="si" value={this.state.si}
                onChange={this.onChangeHand}
                />
                {
                    this.state.filteredArt.map(a1 => <p>{a1.title}</p>)
                }
            </div>
        )
    }
}

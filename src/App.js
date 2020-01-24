import React from 'react';
import Article from './Article'
class App extends React.Component{
  state = {
    articles: [
    ],
    si: '',
    filteredArt: []
  }
  onChangeHand = (e) => {    
    console.log(this.state.si)
    this.setState({
      [e.target.name]: e.target.value
    })

    var siRegex = new RegExp(e.target.value, "i")
    var tempFilArt = []
    this.state.articles.forEach(a1 => {
        if(a1.title.search(siRegex)!==-1){
            tempFilArt.push(a1)
        }
    })
    this.setState({
        filteredArt: tempFilArt
    })


  }
  componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=modi&from=2019-12-30&sortBy=publishedAt&apiKey=4431feeb1f68434185f389172a2274f9";
    fetch(url)
    .then(resp=>{ return resp.json() })
    .then(resp=>{ 
      console.log(resp.articles);
      this.setState({
        articles: resp.articles,
        filteredArt: resp.articles
      })
      var artStr = JSON.stringify(resp.articles)
      localStorage.setItem("articles", artStr);
    })
    .catch(err => {
      var artStr = localStorage.getItem("articles");
      var articles = JSON.parse(artStr);
      this.setState({
        articles: articles,
        filteredArt: articles
      })
    })
  }
  render(){
    return (
      <div>
      <h1>News!!</h1>
      <input name="si" value={this.state.si} onChange={this.onChangeHand}/>
      {
        this.state.filteredArt.map(a1 => <Article {...a1} />)
      }
      </div>
      )    
  }
}
export default App;
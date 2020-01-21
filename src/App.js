import React from 'react';
import Article from './Article'
class App extends React.Component{
  state = {
    articles: [
    ]
  }
  componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=modi&from=2019-12-21&sortBy=publishedAt&apiKey=4431feeb1f68434185f389172a2274f9";
    fetch(url)
    .then(resp=>{ return resp.json() })
    .then(resp=>{ 
      console.log(resp.articles);
      this.setState({
        articles: resp.articles
      })
    })
    .catch(err => {console.log(err)})
  }
  render(){
    return (
      <div>
      <h1>News!!</h1>
      {
        this.state.articles.map(a1 => <Article {...a1} />)
      }
      </div>
      )    
  }
}
export default App;
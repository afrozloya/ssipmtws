import React from 'react';
import Article from './Article'
class App extends React.Component{
  state = {
    articles: [
      {"id":"1", "author":"Akash", "title":"Quality Managment"},
      {"id":"2", "author":"Anand Gupta", "title":"Afroz Sir ka badla.."},
    ]
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
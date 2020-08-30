import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bloc from './component/Bloc';
import Jaime from './component/Jaime';
import Article from './component/Article';

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      articles:[
        { id:1 , title:"hello world 1" , description:"this is a description", count:15, didLike:false },
        { id:2 , title:"hello world 2" , description:"this is a description", count:0, didLike:false },
        { id:3 , title:"hello world 3" , description:"this is a description", count:10, didLike:false },
        
      ]
    }

    this.clickMe = this.clickMe.bind(this);
  }


  clickMe(){
    console.log("clicked");
  }


  render(){
    return (
      <div className="App">
        
        <button onClick = { this.clickMe }  >click me</button>




        {
          this.state.articles.map((article)=>{
            return(
              <Article key={article.id} title={article.title} description = {article.description} count={article.count} didLike={article.didLike} />
            );
          })
        }
  
  
      </div>
    );
  }

}

export default App;

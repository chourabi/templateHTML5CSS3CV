import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bloc from './component/Bloc';
import Jaime from './component/Jaime';
import Article from './component/Article';
import MyForm from './component/MyForm';
import SearchEngine from './component/SearchEngine';

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      
    }

    
  }

  render(){
    return (
      <div className="App">
        
        <SearchEngine/>
  
      </div>
    );
  }

}

export default App;

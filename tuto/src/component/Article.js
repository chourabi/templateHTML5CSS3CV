import React from 'react';
import Jaime from './Jaime';


class Article extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:props.title,
            description:props.description,
            count:props.count,
            didLike:props.didLike,
            
        }
        
    }



    render(){
        return(
            <div >
                <h1>{this.state.title}</h1>
                <p>{this.state.description} </p>
                <Jaime count={this.state.count} didLike={this.state.didLike}  />

            </div>
         );
    }
}


export default Article;
import React from 'react';

class Jaime extends React.Component {

    constructor(props){
        super(props);
        this.state={
            count: props.count,
            didLike:props.didLike
        }
    }


    toggleState(e){
        e.preventDefault();
        if (this.state.didLike === true) {
            this.setState({
                count: (this.state.count-1),
                didLike: ! this.state.didLike
            })
        }else{
            this.setState({
                count: (this.state.count+1),
                didLike: ! this.state.didLike
            })
        }
        
    }


    render(){
        console.log(this.state);
        return(
            <div>
                <a href="#" onClick={ (e)=>{ this.toggleState(e) } } >
                    <span> { this.state.count }  </span>
                    {
                    this.state.didLike ===  true  ?
                    <span> je n'aime plus </span> :
                    <span> j'aime</span>

                    }
                 </a>
                
            </div>
        );
    }

}


export default Jaime;

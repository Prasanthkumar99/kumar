import React, {Component} from 'react';

class Poster extends Component{
    constructor(){
        super();

    }

    render(){
        return(
            <div>
                <h1>welcome{this.props.image} {this.props.title} {this.props.text} </h1>
            </div>
        )
    }
}

export default Poster;
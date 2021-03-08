import React,{ Component } from 'react';

class Welcome extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            clicks:0
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return(
            <div>
            <h1 onClick={this.updateClicks}>Welcome to  {this.props.name} - {this.props.year} ({this.state.clicks}) </h1>
            </div>
            )
    }
} 



export default Welcome;
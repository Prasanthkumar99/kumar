import React, {Component} from 'react';
import './Greeting.css';

class Greetinggenerator extends Component{
    constructor(){
        super();
        this.state={
            greetings:'',
            name:''
        }
    }

    onNameChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }

    generate=()=>{
        this.setState({
            greetings:`Happy Birthday  ${this.state.name}
           , Have a niceday`,
            name:''
        })
    }



    render(){
        return(
            <div className="bg">
                <h3>GREETING GENERATOR</h3>
                <input type="text" name="name"  placeholder="ENTER YOUR NAME" onChange={this.onNameChange} value={this.state.name}/>
                <button onClick={this.generate}>GENERATE</button>
                <h3>{this.state.greetings}</h3>
            </div>
        )
    }
}

export default Greetinggenerator;
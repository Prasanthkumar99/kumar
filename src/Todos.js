import React, {Component} from 'react';

class Todos extends Component{
    constructor(){
        super();

        this.state = {

        }

    }

    render(){
        return(
            <>
            <h1>Todos</h1>
            <input typr = "text" name = "Todo"  />
            <button>Add Todo</button>
            </>
        )
    }
}

export default Todos;
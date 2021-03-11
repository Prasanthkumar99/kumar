import React, { Component } from "react";
import "./Todos.css";

class Todos extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      todo: "",
    };
  }

  onTodoChange = (e) => {
    var todo = e.target.value;
    console.log(todo);
    this.setState({
      todo: todo,
    });
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, 
                this.state.todo],
      todo: "",
    });
  };

  removeTodo = (todo) =>{
    this.setState({todos: this.state.todos.filter((currentTodo) => 
        currentTodo != todo
      ),
    });
  };

  render() {
    return (
      <div className="bg">
        <h1>TODOS LIST</h1>
        <input className="text" type="text" placeholder="Enter List Items" value={this.state.todo} onChange={this.onTodoChange}/>
        <button onClick={this.addTodo}>ADD</button>
        <ol>
            {this.state.todos.map((todo, index) => {return (
              <li key={index}>{todo}<button onClick={() => this.removeTodo(todo)}>REMOVE</button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Todos;

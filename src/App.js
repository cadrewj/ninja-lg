import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import './Todos';
import Todos from './Todos';

class App extends Component {
  state={ //this the content templete of the content you want to put on the page
    todos:[
      {id: 1, content: "Hire a ninja"},
      {id: 2, content: "Find a ninja"}
    ]
  };
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo =>{ //used to filter and delete if they arent equal
      return(todo.id!==id);
    });
    this.setState({
      todos
    })

    
    console.log(id);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <a className="App-link" href="index.html" target="_blank" rel="noopener noreferrer">Ninjas</a>
        </header>
        <div className="todo-app container">{/* "container" is used to put the padding around thee app*/ }
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
}

export default App;

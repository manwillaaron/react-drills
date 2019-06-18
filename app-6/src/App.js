import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
      input:""
   }
      this.handleAddTask = this.handleAddTask.bind(this)
    }
    handleInputChange(value){
      this.setState({input: value} )
    }

    handleAddTask(){
      this.setState({
        tasks: [...this.state.tasks, this.state.input],
        input: ""
      })
    }
  
  render() {
    let tasks = this.state.tasks.map((elem, i) => {
    return <Todo key={i} task={elem} />
  });
    return (
      
      <div>
        <div>My to-do list:</div>
      <div>
        <input 
        value = {this.state.input}
        placeholder= 'Task' 
        onChange= {e => this.handleInputChange(e.target.value)} 
        
        />
        <button onClick = {this.handleAddTask} >ADD</button>
        </div>    

        <br />

        {tasks}
      </div>
    );
  }
}

export default App;

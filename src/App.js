import './App.css';
import React from 'react';
import TodoListComponent from './todoList/todolist';
import AddTodo from './addtodo/addtodo';

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  render(){
    return(<div>
      <AddTodo addTodofn={this.addTodo}></AddTodo>
      <TodoListComponent updateTodofn={this.updateTodo} todos = {this.state.todos}></TodoListComponent>
    </div>)
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos){
      const savedTodos  = JSON.parse(todos);
      this.setState({todos: savedTodos})
      console.log('has todos')
    }
    else{
      console.log('no todos')

    }
  }
  addTodo = async (todo) => 
  {
    await this.setState({ todos: [...this.state.todos, {
      text: todo,
      completed: false
    }]});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem(todo));
  }
  updateTodo = async (todo) => {
     const newTodos = this.state.todos.map(_todo => { 
      if(todo === _todo)
      return {
        text: todo.text,
        completed: !todo.completed
      }
      else return _todo
    })
    await this.setState({todos: newTodos})
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }
}
export default App;

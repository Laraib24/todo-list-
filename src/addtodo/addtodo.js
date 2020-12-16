import React from 'react';
import './style.css'

class AddTodo extends React.Component{

    constructor(){
        super();
        this.state = {
            todo: '',
        };
    }
    render(){
        return(<div className = "todo-container">
            <form onSubmit={(e) => this.submitTodo(e)}>
                <input id="addTodoInput" onChange = {(e) =>this.updateInput(e)}>
                </input>
                <button  type="submit">Add Todo</button>
            </form>
        </div>)
    }

    updateInput = (e) => {
        // console.log(e)
        this.setState({todo: e.target.value})

    }
    submitTodo = (e) => {
        e.preventDefault();
        // console.log('submit', this.state)
        this.props.addTodofn(this.state.todo)
        document.getElementById('addTodoInput').value = '';
    }
}

export default (AddTodo);
import React from 'react';
import './style.css';

class TodoItemComponent extends React.Component{

    render(){
        const { todo } = this.props;
    return(<div className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.toggleTodo}>{ todo.text }</div>)
    }
    toggleTodo = () => {
        this.props.updateTodofn(this.props.todo)

    }
}

export default (TodoItemComponent);
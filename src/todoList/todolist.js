import React from 'react';
import TodoItemComponent from '../todoItem/todoitem';

class TodoListComponent extends React.Component{

    render(){
        const { todos, updateTodofn } = this.props;
        return(<div>
            { 
              todos.map((_todo, _index) => {
              return(<TodoItemComponent updateTodofn={this.updateTodo}
                key={_index} todo={_todo}></TodoItemComponent>)})
            }
        </div>)
    }
    updateTodo = (todo) => {
        this.props.updateTodofn(todo)

    }
}

export default  (TodoListComponent);
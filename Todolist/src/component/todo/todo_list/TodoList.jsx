import React from "react";
import './TodoList.css'
import TodoItem from '../todo_item/TodoItem'
const TodoList =(props)=>
{

    const { todo = [] } = props;
    if(todo.length === 0)
    {
        return (<h2>No todo works Found</h2>)   
    }
    return(
        <ul className="todo-list">
            {todo.map((each_todo)=>
            {
                return (
                <TodoItem  
                key={each_todo._id || each_todo._id}
                name={each_todo.name}
                isCompleted={ each_todo.isCompleted} 
                priority={each_todo.priority}/>
                    )
            }
            )}
        </ul>
    )
}
export default TodoList;
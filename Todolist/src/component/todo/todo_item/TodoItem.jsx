import React from "react";
import './TodoItem.css';
import TodoDate from "../todo_date/TodoDate";
const TodoItem=(props)=>{
    const{name,isCompleted,priority}=props;
    return (
        <>
        
        <li>  
        <div className="todo-item">
            
         
            <div className="todo-item__description"><h1>{name}</h1>
            <div className="todo-item__price">Status:{isCompleted}</div>
            <div className="todo-item__description">Priority:{priority}</div>


        </div>
    </div>
    </li></>)
}
export default TodoItem;
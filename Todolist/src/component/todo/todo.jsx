import React from "react";
import './todo.css';
import TodoList from "./todo_list/TodoList";

const Todo = (props)=>
{
    const { todo=[] }=props;
    return (
         <div className="todo">
            {/* expense filter
            expense list */}

            <TodoList todo={todo}/>

         </div>)
}

export default Todo;
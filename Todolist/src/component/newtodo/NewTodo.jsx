import React from "react";
import {nanoid} from "nanoid";
import './NewTodo.css';
import NewTodoForm from './new_todo_form/NewTodoForm'

const NewTodo = (props) =>
{
    const { submitAction }=props;
    const onNewAddTodo=(todo)=>
    {
        const modified_todo=
        {
                ...todo,
                id:nanoid(),
        }
        submitAction(modified_todo);
    }
    return (
        <div className="new-todo">
        <NewTodoForm save={onNewAddTodo}/>
        </div>
    )
}
export default NewTodo;
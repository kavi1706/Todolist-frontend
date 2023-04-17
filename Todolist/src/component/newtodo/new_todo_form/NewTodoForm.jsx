import React,{useState} from "react";
import './NewTodoForm.css'

const NewTodoForm =(props)=>
{
    const [name,setName]=useState('');
    const [isCompleted,setIsCompleted]=useState('');
    const [priority,setPriority]=useState('');
    
    const { save }=props;

    const onNameChangeHandler=(event)=>
    {
        setName(event.target.value);
    }
    const onIsCompletedChangeHandler=(event)=>
    {
        setIsCompleted(event.target.value);
    }
    const onPriorityChangeHandler=(event)=>
    {
        setPriority(event.target.value);
    }
    
    const onSubmitHandler =(event)=>
    {
        event.preventDefault();
        const new_todo ={
            name,isCompleted,priority,
            
        }
        save(new_todo);
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <div className="new-todo__controls">
                <div className="new-todo__control">
                        <label htmlFor="todo_name">Name</label>
                        <input type="text" name="name" id="todo_name" onChange={onNameChangeHandler} value={name}></input>
                </div> <br />
                <div className="new-todo__control">
                        <label htmlFor="todo_isCompleted">Status </label>
                        <input type="text" name="isCompleted" id="todo_isCompleted"onChange={onIsCompletedChangeHandler} value={isCompleted}></input>
                </div><br />
                <div className="new-todo__control">
                        <label htmlFor="todo_priority">Priority </label>
                        <input type="text" name="priority" id="todo_priority"onChange={onPriorityChangeHandler} value={priority}></input>
                </div>
               
            </div>
            <div className="new-todo__actions">
                    
                    <button type="submit" >New Todo</button>
            </div>

        </form>
    )
}
export default NewTodoForm;
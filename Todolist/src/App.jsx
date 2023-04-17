import {React,useState,useEffect} from 'react';
import Todo from './component/todo/todo';
import NewTodo from './component/newtodo/NewTodo'
import { addTodo , getAllTodo } from './api';

function App() 
{

 const [todo,setTodo]=useState([])
 useEffect (()=>
 {
  getAllTodo(setTodo);
 },[]);

  const onAddNewTodo=( val )=>{
    addTodo(val,()=>{
      setTodo((prv)=>{[...prv,val]})
    })
  }

    const onAddNewTodoItem=(todo)=>
      {
        console.log('App:',todo)
        addTodo(todo,()=> 
          {
          setTodo((previous_todo)=>{
              return[todo, ...previous_todo]
            })
      });
        
      }
  return (
    <div className="App">
      <h1 style={{color:"black",textAlign:"center"}}>TODO LIST</h1>
      <div style={{float:"left"}}><NewTodo submitAction={onAddNewTodoItem}/></div>
      <div style={{float:"left",width:"50%"}}></div>
     <div style={{float:"left",marginLeft:"200px"}}><Todo todo={todo} /></div>
    
    </div>
  )
}

export default App


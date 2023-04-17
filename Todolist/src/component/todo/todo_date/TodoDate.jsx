import React from "react";
import './TodoDate.css'
const TodoDate=(props)=>{
    const {date}=props;
    let dateObj=new Date(date)
    console.log(date);
    const month=dateObj.toLocaleString('en-US',{month:'long'});
    const day=dateObj.toLocaleString('en-US',{day:'numeric'});
    const year=dateObj.getFullYear();
return(
    <div className="todo-date">
            <div className="todo-date__month">{month}</div>
            <div className="todo-date__day">{day}</div>
            <div className="todo-date__year">{year}</div>
    </div>
)
}

export default TodoDate;
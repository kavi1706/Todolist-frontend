export const getAllTodo = (setTodo)=>
{
fetch('http://localhost:3000/api/v2/todo')
  .then((response)=> response.json())
  .then((todo_data)=> setTodo(todo_data.data));
}

export const addTodo=( postData ={},callback)=>
{
    fetch('http://localhost:3000/api/v2/todo',
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(postData),
    }   )
    .then((response)=> response.json())
  .then((data)=> {callback && callback();
});
}
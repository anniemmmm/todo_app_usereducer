import { useState,useReducer, } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


const todoReducer=(todos:any, action:any) => {
  switch (action.type){
    case "ADD-TODO":
      return [...todos,action.payload];

    default:
      break;
  }
};


function App() {
  const [todos,dispatch]= useReducer(todoReducer,[]);
  const [newTodo,setNewtodo]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
    setNewtodo("");
  }

  const handleAdd = ()=>{
    dispatch({type:"ADD-TODO", payload: newTodo});
    setNewtodo("");
  };

 
  return (
    <form className="max">
      <h2 className="todo_app_title">Todo Lists</h2>
    <div className="flex_items">
      <input
      value={newTodo}
      className="text_title"
      type="text"
      placeholder="Enter text"
      />
      <button onClick={handleAdd}
       className="add_button">
        Add
      </button>
    </div>
    <ul className="ul_lists">
      {todos.length <=0 && (
        <div className="text_todos">TODOS</div>
      )}
      {todos.map((todo)=>(
        <li key ={todo}>
        <div>
          <input
          type="checkbox"/>
          <span>{todo.text}</span>
        </div>
      </li>
      ))}
    </ul>
  </form>
  );
}

export default App

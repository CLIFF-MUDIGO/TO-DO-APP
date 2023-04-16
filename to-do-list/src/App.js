import React, { useState } from "react"
import './App.css';

function App() {


const [list, setList] = useState([]);
const [input, setInput] = useState("");

 const addTodo = (todo) => {
  const newTodo = {
    id: Math.random(),
    todo:todo,
  }
 }


  return (
   <div>
    <h1>TO DO LIST</h1>
    <input type="text" placeholder="Enter" value={input} onChange={(e)=> setInput(e.target.value)}></input>
    <button>add</button>
    
   </div>
  );
}

export default App;

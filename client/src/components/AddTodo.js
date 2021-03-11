import React, { useState } from 'react';
import './AddTodo.css';
function AddTodo({ createTodo }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    let val = e.target.value;
    setInput(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createTodo(input);
    setInput('');
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      {/* <label htmlFor="task">New Task</label> */}
      <input
        value={input}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Task"
      />
      <button className="addButton">Add Task</button>
    </form>
  );
}

export default AddTodo;

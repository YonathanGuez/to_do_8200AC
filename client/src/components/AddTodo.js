import React, { useReducer } from 'react';

function AddTodo({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: '',
    }
  );

  const handleChange = (e) => {
    setUserInput({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { task: userInput.task };
    createTodo(newTodo);
    setUserInput({ task: '' });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      {/* <label htmlFor="task">New Task</label> */}
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Task"
      />
      <button>Add Task</button>
    </form>
  );
}

export default AddTodo;

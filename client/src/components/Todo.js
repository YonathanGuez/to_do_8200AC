import React from 'react';
import './Todo.css';
function Todo({ todo, remove, toggleComplete }) {
  const handleRemove = (e) => {
    remove(e.target.id);
  };
  const toggleCompleted = (e) => {
    toggleComplete(e.target.id);
  };

  let result = (
    <div className="Todo">
      <li
        id={todo.id}
        onClick={toggleCompleted}
        className={todo.status ? 'Todo-task completed' : 'Todo-task'}
      >
        {todo.task}
      </li>
      <div className="Todo-buttons">
        <button
          id={todo.id}
          className={todo.status ? 'buttonTrue' : 'buttonFalse'}
          onClick={toggleCompleted}
        >
          {todo.status ? 'done' : 'undone'}
        </button>
        <button onClick={handleRemove}>
          <i id={todo.id} className="fas fa-trash" />
        </button>
      </div>
    </div>
  );

  return result;
}

export default Todo;

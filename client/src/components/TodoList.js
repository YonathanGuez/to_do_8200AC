import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const getAllTasks = async () => {
    const url = process.env.REACT_APP_URL + '/api/client/';
    const response = await fetch(url);
    console.log(url);
    if (response.ok) {
      const json = await response.json();
      setTodos(json.tasks);
    } else {
      console.log('bad request: ');
    }
  };
  const create = async (newTodo) => {
    const url = process.env.REACT_APP_URL + '/api/client/add/' + newTodo.task;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const json = await response.json();
      let newtask = { id: json.id, task: newTodo.task, status: false };
      setTodos([...todos, newtask]);
    }
  };

  const remove = async (key) => {
    const url = process.env.REACT_APP_URL + '/api/client/delete/' + key;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      getAllTasks();
    }
  };
  const updateStatus = async (key, status) => {
    const url = process.env.REACT_APP_URL + '/api/client/update/' + key;
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: status }),
    });
    if (response.ok) {
      // const json = await response.json();
      // console.log(json);
    }
  };
  const toggleComplete = async (key) => {
    const updatedTodos = todos.map((todo) => {
      if (todo['id'].toString() === key) {
        console.log(key, !todo['status']);
        updateStatus(key, !todo['status']);
        return { ...todo, status: !todo['status'] };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      await getAllTasks();
    }
    fetchMyAPI();
  }, []);

  let todosList = todos.map((todo) => (
    <Todo
      toggleComplete={toggleComplete}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <AddTodo createTodo={create} />
      <ul>{todosList}</ul>
    </div>
  );
}

export default TodoList;

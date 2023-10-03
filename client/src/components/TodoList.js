import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  // let API=process.env.REACT_APP_API_HOST || 'localhost'
  // let port_api= process.env.REACT_APP_API_PORT || 4000
  // let url_api='http://'+API+':'+port_api
  const getAllTasks = async () => {
    const url = '/api/client/';
    console.log(url);
    try {
      const response = await fetch(url);
      // console.log(url);
      if (response.ok) {
        const json = await response.json();
        setTodos(json.tasks);
      } else {
        console.log('bad request: ');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const create = async (newTodo) => {
    const url = '/api/client/add/' + newTodo;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const json = await response.json();
        let newtask = { id: json.id, task: newTodo, status: false };
        setTodos([...todos, newtask]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const remove = async (key) => {
    const url = '/api/client/delete/' + key;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        getAllTasks();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateStatus = async (key, status) => {
    const url = '/api/client/update/' + key;
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: status }),
      });
      if (response.ok) {
        // const json = await response.json();
        // console.log(json);
      }
    } catch (error) {
      console.log(error);
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

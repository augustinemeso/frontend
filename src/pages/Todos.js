import React, { useState, useEffect } from 'react';
import api from '../api';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await api.get('/todos');
      setTodos(response.data.todos);
    } catch (error) {
      setMessage('Failed to fetch todos.');
    }
  };

  const addTodo = async () => {
    if (!newTodo) {
      setMessage('Todo text is required');
      return;
    }

    try {
      await api.post('/todos', { text: newTodo });
      setNewTodo('');
      setMessage('Todo added successfully!');
      fetchTodos();
    } catch (error) {
      setMessage('Failed to add todo.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>To-Do List</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={addTodo}>Add</button>
      <p className="mt-3">{message}</p>
      <ul className="list-group mt-3">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
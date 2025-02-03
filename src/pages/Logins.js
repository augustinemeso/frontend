import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { setAuthToken } from '../api'; // Ensure correct import of setAuthToken
import '../App.css'; // Correct import path for App.css

function Logins() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setMessage('Username and password are required');
      return;
    }
    try {
      const response = await api.post('/login', { username, password });
      setAuthToken(response.data.token); // Store the token
      setMessage('Login successful!');
      navigate('/todos'); // Redirect to Todos page after successful login
    } catch (error) {
      setMessage('Login failed. Invalid credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
}

export default Logins;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // Make sure this is the correct import path for your API
import '../App.css'; // Correct import path for App.css

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password) {
      setMessage('Username and password are required');
      return;
    }
    try {
      await api.post('/register', { username, password });
      setMessage('User registered successfully!');
      navigate('/'); // Navigate to login page after successful registration
    } catch (error) {
      setMessage('Registration failed. Username may already exist.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default Register;
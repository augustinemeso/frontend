import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logins from './pages/Logins'; // Login page
import Register from './pages/Register'; // Register page
import Todos from './pages/Todos'; // Todos page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logins />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
}

export default App;
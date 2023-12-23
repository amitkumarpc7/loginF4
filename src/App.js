import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        const { id, token, ...userData } = result;
        localStorage.setItem('user', JSON.stringify({ id, token, ...userData }));
        navigate('/profile');
      } else {
        setError(result.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <p>Welcome back!👋</p>
        <h2>Sign in to your account</h2>
        
        <label htmlFor="username">Your email</label><br></br>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br></br>
        <label htmlFor="password">Password</label><br></br>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br></br>
        <button type="button" onClick={handleLogin}>
          CONTINUE
        </button>
        <p className='textE'>Forgot your password?</p>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default App;

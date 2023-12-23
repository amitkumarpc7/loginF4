import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './component/Profile';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/profile" element={<Profile />} />
    </Routes>
</Router>

);


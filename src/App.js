// src/App.js
import React from 'react';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Posts from './components/Posts';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Users />
      <UserDetails />
      <Posts />
      <Todos />
    </div>
  );
}

export default App;

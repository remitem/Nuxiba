// src/components/Todos.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos } from '../features/users/usersSlice';
import { TextField, Checkbox, Button, FormControlLabel } from '@mui/material';
import '../styles/Todos.css';

const Todos = () => {
  const todos = useSelector((state) => state.users.todos);
  const userId = useSelector((state) => state.users.selectedUser?.id);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const addTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title,
        completed,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const newTodo = await response.json();
    dispatch(setTodos([newTodo, ...todos]));
    setTitle('');
    setCompleted(false);
  };

  return (
    <div>
      <h2 className='todotitulo'>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p className='todotexto'>{todo.title}</p>
            <p className='VoF'>{todo.completed ? 'Completado' : 'No Completado'}</p>
          </li>
        ))}
      </ul>
      <div className='cajas'>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          margin="normal"
          className='cajadetexto'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          }
          label="Completado"
        />
        <Button variant="contained" color="primary" onClick={addTodo}>
          Guardar
        </Button>
      </div>
    </div>
  );
};

export default Todos;

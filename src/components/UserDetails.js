// src/components/UserDetails.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts, setTodos } from '../features/users/usersSlice';
import '../styles/UserDetails.css'

const UserDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.selectedUser);

  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const data = await response.json();
    dispatch(setPosts(data));
  };

  const fetchTodos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
    const data = await response.json();
    dispatch(setTodos(data.sort((a, b) => b.id - a.id)));
  };

  if (!user) return <div>Selecciona un usuario</div>;

  return (
    <div>
      <h2 className='Usuario'>{user.name}</h2>
      <p className='Datos'>Username: {user.username}</p>
      <p className='Datos'>Email: {user.email}</p>
      <button onClick={fetchPosts}>Ver Posts</button>
      <button onClick={fetchTodos}>Ver Todos</button>
    </div>
  );
};

export default UserDetails;

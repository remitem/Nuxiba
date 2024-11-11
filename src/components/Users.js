// src/components/Users.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, selectUser } from '../features/users/usersSlice';
import '../styles/Users.css'

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2 className='Usuarios'>Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => dispatch(selectUser(user))}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

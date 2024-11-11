// src/features/users/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    selectedUser: null,
    posts: [],
    todos: [],
  },
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { selectUser, setPosts, setTodos } = usersSlice.actions;
export default usersSlice.reducer;

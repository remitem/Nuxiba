// src/components/Posts.js
import React from 'react';
import '../styles/Posts.css';
import { useSelector } from 'react-redux';
import '../styles/Posts.css';

const Posts = () => {
  const posts = useSelector((state) => state.users.posts);

  return (
    <div>
      <h2 className='Post'>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p className='posttitulo'>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

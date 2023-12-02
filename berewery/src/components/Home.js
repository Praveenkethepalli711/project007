// src/components/Home.js
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './Login';
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home page!</p>
      <LoginButton />
    </div>
  );
};

export default Home;

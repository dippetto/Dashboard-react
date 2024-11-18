// File: src/App.js
import React, { useContext } from 'react';
import { UserProvider, UserContext } from './UserContext';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import Drawing from './Drawing';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      {user ? <Dashboard /> : <LoginForm />}
      <Drawing />
    </div>
    
  );
}

export default function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

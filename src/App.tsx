import axios from 'axios';
import React, { useState } from 'react';

import './App.css';

import Form from './components/Form';
import List from './components/List';
import UserModal from './components/UserModal';

import User from './interfaces/user.interface';

import { api } from './service/api';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const [error, setError] = useState<string>("");

  async function searchUsers(username: string) {
    try {
      const response = await api.get(`search/users?q=${username}`);
  
      setUsers(response.data.items);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response?.data.message);
      }
    }
  }

  async function fetchUser(username: string) {
    try {
      const response = await api.get(`/users/${username}`);
  
      setUser(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response?.data.message);
      }
    }
  }

  function handleCloseModal() {
    setUser(null);
  }

  return (
    <div className="App h-screen flex flex-col items-center p-10 bg-gray-900 overflow-auto">
      <Form onSubmit={searchUsers} />
      
      <List users={users} onHandleShowUser={fetchUser} />

      {user ? (
        <UserModal user={user} onClose={handleCloseModal} />
      ) : (
          <p className="p-10 text-sm text-gray-400 truncate">{error ? error : "Nenhum usuário encontrado"}</p>
      )}
    </div>
  );
}

export default App;

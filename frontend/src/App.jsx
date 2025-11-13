import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Register from './pages/Register';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import Nav from './components/Nav';
import { setAuthToken } from './services/api';
import Login from './pages/login';

function App(){
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('auth');
    return raw ? JSON.parse(raw).user : null;
  });

  useEffect(()=>{
    const raw = localStorage.getItem('auth');
    if (raw){
      const { token, user } = JSON.parse(raw);
      setAuthToken(token);
      setUser(user);
    }
  }, []);

  const handleLogin = ({ token, user }) => {
    localStorage.setItem('auth', JSON.stringify({ token, user }));
    setAuthToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setAuthToken(null);
    setUser(null);
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <Nav user={user} onLogout={logout} />
      <Routes>
        <Route path="/" element={<Login onAuth={handleLogin}/>} />
        <Route path="/register" element={<Register onAuth={handleLogin} />} />
        <Route path="/books" element={<Books user={user}/>} />
        <Route path="/add" element={user?.role === 'admin' ? <AddBook /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

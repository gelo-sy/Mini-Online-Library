import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login({ onAuth }){
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

// existing acc po from DB
// username: gelo_admin@gmail.com
// password: me_admin

  const submit = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      onAuth(res.data);
      navigate('/books');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} /><br/>
      <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} /><br/>
      <button type="submit">Login</button>
    </form>
  );
}
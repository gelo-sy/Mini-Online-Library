import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Register({ onAuth }){
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const submit = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', form);
      onAuth(res.data);
      navigate('/books');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} /><br/>
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} /><br/>
      <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} /><br/>
      <button type="submit">Register</button>
    </form>
  );
}
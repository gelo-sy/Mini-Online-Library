import React, { useState } from 'react';
import API from '../services/api';

export default function Login({ onAuth }){
  const [form, setForm] = useState({ email: '', password: '' });

  const submit = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      onAuth(res.data);
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
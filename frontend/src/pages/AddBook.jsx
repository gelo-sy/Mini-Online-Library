import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AddBook(){
  const [form, setForm] = useState({ title:'', author:'', description:'' });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/books', form);
      alert('Added');
      nav('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Add Book</h2>
      <input placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} /><br/>
      <input placeholder="Author" value={form.author} onChange={e=>setForm({...form, author:e.target.value})} /><br/>
      <textarea placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} /><br/>
      <button type="submit">Add</button>
    </form>
  );
}
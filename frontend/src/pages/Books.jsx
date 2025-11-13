import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function Books(){
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    API.get('/books').then(res => setBooks(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="book-list">
      <h2>Books</h2>

      {books.length === 0 ? (
        <p className="no-books">No books yet.</p>
      ) : (
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {books.map((b) => (
              <tr key={b._id}>
                <td className="title">{b.title}</td>
                <td className="author">{b.author || "N/A"}</td>
                <td className="desc">{b.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
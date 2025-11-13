import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaSignInAlt, FaUserPlus, FaPlus, FaSignOutAlt, FaHome } from 'react-icons/fa';

export default function Nav({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <FaBook className="nav-icon" /> Mini Library
        </Link>
        <Link to="/">
          <FaHome className="nav-icon" /> Books
        </Link>
        {user?.role === 'admin' && (
          <Link to="/add">
            <FaPlus className="nav-icon" /> Add Book
          </Link>
        )}
      </div>

      <div className="nav-right">
        {!user && (
          <>
            <Link to="/login">
              <FaSignInAlt className="nav-icon" /> Login
            </Link>
            <Link to="/register">
              <FaUserPlus className="nav-icon" /> Register
            </Link>
          </>
        )}
        {user && (
          <>
            <span className="welcome">
              Welcome, <strong>{user.name || user.email}</strong> ({user.role})
            </span>
            <button className="logout-btn" onClick={onLogout}>
              <FaSignOutAlt className="nav-icon" /> Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
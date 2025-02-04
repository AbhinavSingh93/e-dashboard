import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div>
      <img className='logo' src="https://i.ibb.co/TD1YK7Qw/DALL-E-2025-02-04-08-18-56-A-modern-minimalist-logo-for-an-e-commerce-dashboard-The-logo-features-a.png" alt="DALL-E-2025-02-04-08-18-56-A-modern-minimalist-logo-for-an-e-commerce-dashboard-The-logo-features-a" />
      {auth ? <ul className='nav-ul'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Product</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
      </ul>
        :
        <ul className='nav-ul nav-right'>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      }
    </div>
  )
}

export default Nav;
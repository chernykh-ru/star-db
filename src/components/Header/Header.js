import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import './Header.css';

const Header = ({ onChangeService }) => {
  return (
    <div className='header d-flex'>
      <h3 className='header-logo'>
        <Link to='/' className='nav-link'>
          Star DB
        </Link>
      </h3>
      <ul className='d-flex'>
        <li>
          <Link to='/people/' className='nav-link'>
            People
          </Link>
        </li>
        <li>
          <Link to='/planets/' className='nav-link'>
            Planets
          </Link>
        </li>
        <li>
          <NavLink to='/starships/' end className='nav-link'>
            Starships
          </NavLink>
        </li>
        <li>
          <Link to='/login/' className='nav-link'>
            Login
          </Link>
        </li>
        <li>
          <Link to='/secret/' className='nav-link'>
            Secret
          </Link>
        </li>
      </ul>
      <button className='btn btn-primary btn-sm' onClick={onChangeService}>
        Change API Service
      </button>
      <Outlet />
    </div>
  );
};

export default Header;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
          <Link to='/people' className='nav-link'>
            People
          </Link>
        </li>
        <li>
          <Link to='/planet' className='nav-link'>
            Planets
          </Link>
        </li>
        <li>
          <Link to='/starship' className='nav-link'>
            Starships
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

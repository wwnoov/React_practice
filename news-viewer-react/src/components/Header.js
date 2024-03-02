import React from 'react';
import { NavLink } from '../../node_modules/react-router-dom/dist/index';

const Header = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-bold">News API</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'p-2 text-dark active' : 'p-2 text-dark'
          }
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'p-2 text-dark active' : 'p-2 text-dark'
          }
          to="/news"
        >
          NEWS
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

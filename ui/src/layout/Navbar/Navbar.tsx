import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar: React.FC<any> = ({ icon, title }) => {
  return <nav className='navbar bg-primary'>
    <h1>
      <i className={icon} /> {title}
    </h1>
    <ul>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </nav>;
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;

import React from 'react';
import logo from '../../media/logo.svg';
import './Header.css';

const Header = () => (
  <header className="header">
    <img src={logo} className="header__logo header__logo--spin" alt="logo" />
    <p>
      Edit
      <code> src/App.jsx </code>
      and save to reload.
    </p>
    <a
      className="header__link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);

export default Header;

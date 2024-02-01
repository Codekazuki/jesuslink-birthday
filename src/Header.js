import React from "react";

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='./assets/rccg-for-web.png' alt='Logo' />
      </div>
      <nav className='navigation'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/services'>Departments</a>
      </nav>
    </header>
  );
};

export default Header;

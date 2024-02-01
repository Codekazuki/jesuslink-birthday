import React from "react";

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='your_icon_url' alt='Logo' />
      </div>
      <nav className='navigation'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/services'>Services</a>
        <a href='/contact'>Contact</a>
      </nav>
    </header>
  );
};

export default Header;

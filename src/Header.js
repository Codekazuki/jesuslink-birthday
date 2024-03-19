import React from "react";
import { useState } from "react";

const Header = () => {
  const [home, setHome] = useState("");
  function handleHome() {
    setHome("Hommie");
  }
  return (
    <header className='header'>
      <div className='logo'>
        <img src='./assets/rccg-for-web.png' alt='Logo' />
      </div>
      <nav className='navigation'>
        <a href='/' onClick={handleHome}>
          Home
        </a>
        <a href='/about'>About</a>
        <a href='/services'>Departments</a>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { useState } from "react";

const Header = () => {
  // fix this later
  const [home, setHome] = useState("home");
  function handleHome() {
    setHome("Hommie");
  }
  return (
    <header className='header'>
      <div className='logo'>
        <img src='./assets/rccg-for-web.png' alt='Logo' />
      </div>
      <nav className='navigation'>
        {/* work on this too */}
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

import React from "react"

const Header = () => {
return(
  <header>
    <nav className="navbar">
      <div className="logo">
       LOGO
      </div>
      <ul className="nav-links">
        <li ><a href="#home">HOME</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="#service">SERVICE</a></li>
      </ul>
    </nav>
  </header>
);
};


export default Header;
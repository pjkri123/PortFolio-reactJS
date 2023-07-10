import './App.css';
import React from 'react';
import './index.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-container">
            <div className="navbar-logo">
              <div class="logo"><a href="#top">Portfo<span>lio.</span></a></div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                      <a href="#home">Home</a>
                    </li>
                    <li className="navbar-item">
                      <a href="#about">About</a>
                    </li>
                    <li className="navbar-item">
                      <a href="#skills">Skills</a>
                    </li>
                    <li className="navbar-item">
                      <a href="#project">Projects</a>
                    </li>
                    <li className="navbar-item">
                      <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
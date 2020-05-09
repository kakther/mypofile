import React from 'react';

const Nav = () => {
  return (
    <div className="banner">
      <nav className="nav justify-content-center">
        <a className="nav-link active" href="/">
          {/* <img src={logo}
            alt="Logo"
            className="logo"
          /> */}
        </a>
        <ul className="menu">
          <li className="menu-item">
            <a href="aboutme" className="active">About Me</a>
          </li>
          <li className="menu-item">
            <a href="contact">Contact</a>
          </li>
          <li className="menu-item">
            <a href="projects">Project</a>
          </li>
          <li className="menu-item">
            <a href="resume">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Nav;


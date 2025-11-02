// 
import React from "react";
import "./header.css";
// import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="glass-nav" role="banner">
      <div className="nav-container">
        {/* Left: Logo */}
        <a href="/" className="nav-logo" aria-label="Home">
          {/* <img src={logo} alt="Logo" /> */}
        </a>

        {/* Center: Navigation Links */}
        <nav className="nav-links" aria-label="Primary navigation">
          <ul>
            <li><a href="/marketplace">Marketplace</a></li>
            <li><a href="/tokenize">Tokenize</a></li>
            <li><a href="/investors">Investors</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>

        {/* Right: Actions */}
        <div className="nav-actions">
          <a href="/startups" className="btn-outline">Startups</a>
          <a href="/investors" className="btn-primary">Investors</a>
        </div>
      </div>
    </header>
  );
}

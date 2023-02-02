import React from "react";
import "./header.css";

export default function Header() {
  const openNav = () => {
    document.getElementById("sub-menu").style.width = "250px";
    document.querySelector("#menu-list").style.display = "block";
  };

  const closeNav = () => {
    document.getElementById("sub-menu").style.width = "0";
    document.querySelector("#menu-list").style.display = "none";
  };
  return (
    <>
      <header id="main-header">
        <nav className="left-menu">
          <div id="menu-btn" onClick={openNav}>
            <span className="h"></span>
            <span className="h"></span>
            <span className="h"></span>
          </div>
          <div id="sub-menu" className="sub-menu">
            <ul id="menu-list">
              <a href="#" className="closebtn" onClick={closeNav}>
                &times;
              </a>
              <a href="/aboutme">About Me</a>
              <a href="/collection">Work Collection</a>
              <a href="/effort">How I Make an Effort</a>
              <a href="/support">Support</a>
              <div className="tooltip-area">
                <a
                  href="https://liv-log.tistory.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Study Records
                </a>
                <span className="tooltip-text" id="bottom">
                  Move to study blog
                </span>
              </div>
              <div className="hide-show">
                <a href="/behind-the-scenes">Behind the Scenes</a>
                <a href="/contact">Contact</a>
              </div>
            </ul>
          </div>
          <a href="/" id="home">
            <span id="home-letter">Home</span>
            <span id="home-icon" className="material-symbols-outlined">
              home
            </span>
          </a>
        </nav>
        <div className="main-logo">
          <p id="olivia">Olivia Oh</p>
        </div>
        <nav>
          <ul className="right-menu">
            <li>
              <a className="btn" href="/collection">
                Portfolio
              </a>
            </li>
            <li>
              <a className="btn" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="btn" href="/behind-the-scenes">
                Behind the Scenes
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

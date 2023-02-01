import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-border"></div>
        <div className="footer-menu">
          <div className="right-footer">
            <a className="footer-link" href="/aboutme">
              About
            </a>
            <a className="footer-link" href="/contact">
              Contact
            </a>
            <a className="footer-link" href="/collection">
              Collection
            </a>
          </div>
          <div className="portfolio-footer">
            <p>Portfolio</p>
          </div>
          <div className="left-footer">
            <a
              className="footer-link"
              target="_blank"
              href="https://www.linkedin.com/in/Yeonju-Olivia-Oh"
              rel="noreferrer"
            >
              Linked In
            </a>
            <a
              className="footer-link"
              target="_blank"
              href="https://my.indeed.com/p/zey58vx"
              rel="noreferrer"
            >
              Indeed
            </a>
          </div>
        </div>
        <div className="middle-footer">
          <p>©2023 OLIVIA OH ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </>
  );
}

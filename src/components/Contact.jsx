import React from "react";
import "./contact.css";

export default function Contact() {
  const email = "yjjhsh27@gmail.com";
  const phone = "0700358319";
  function copyEmail() {
    navigator.clipboard.writeText(email).then(() => {
      alert("Successfully Copied Text: " + email);
    });
  }
  function copyPhone() {
    navigator.clipboard.writeText(phone).then(() => {
      alert("Successfully Copied Text: " + phone);
    });
  }
  return (
    <div id="contact">
      <h1 id="contact-head">Contact</h1>
      <div className="contact-area">
        <div className="contact-details">
          <div className="contact-wrap">
            <h2 className="contact-type">Email</h2>
            <div className="contact-card">
              <p className="contact-p">
                Gmail 📧
                <br />
                <span id="email">yjjhsh27@gmail.com</span>
              </p>
              <button className="contact-btn" onClick={copyEmail}>
                Copy
              </button>
            </div>
          </div>
          <span className="contact-line"></span>
          <div className="contact-wrap">
            <h2 className="contact-type">Social Network Account</h2>
            <div className="contact-card">
              <a href="www.linkedin.com/in/Yeonju-Olivia-Oh">Linked In</a>
              <a href="https://my.indeed.com/p/zey58vx">Indeed</a>
              <a href="https://github.com/Liv0130">Github</a>
            </div>
          </div>
          <span className="contact-line"></span>
          <div className="contact-wrap">
            <h2 className="contact-type">Private Phone</h2>
            <div className="contact-card">
              <p className="contact-p">
                Phone 📱
                <br />
                <span id="phone">070-035-8319</span>
              </p>
              <button className="contact-btn" onClick={copyPhone}>
                Copy
              </button>
            </div>
          </div>
          <span className="contact-line"></span>
          <div className="contact-wrap">
            <h2 className="contact-type">Available Time</h2>
            <div className="contact-card">
              <p className="contact-p">10AM - 17PM (MON - FRI) ⏰</p>
            </div>
          </div>
        </div>
        <div id="phone-img">
          <div className="icon">
            <img
              className="phone-icon"
              alt="gmail"
              src={require("../assets/gmail.png")}
            />
            <img
              className="phone-icon"
              alt="linkedin"
              src={require("../assets/linkedin.png")}
            />
            <img
              className="phone-icon"
              alt="jobstreet"
              src={require("../assets/jobstreet.png")}
            />
            <img
              className="phone-icon"
              alt="ios_phone"
              src={require("../assets/ios_phone.png")}
            />
            <img
              className="phone-icon"
              alt="ios_message"
              src={require("../assets/ios_message.png")}
            />
          </div>
          <img id="phone" alt="phone" src={require("../assets/phone.png")} />
          <div className="phone-menu">Feel Free to Contact Me!</div>
        </div>
      </div>
    </div>
  );
}

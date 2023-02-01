import React from "react";
import "./home.css";
export default function Home() {
  return (
    <main>
      <div className="keyword-area">
        <p className="keyword">
          Passionate
          <br />
          Driven
          <br />
          Self-Motivated
          <br />
          FrontEnd
          <br />
        </p>
      </div>
      <div id="img-box">
        <div id="main-image">
          <img
            id="main-img"
            src={require("../assets/mainimgex.jpeg")}
            alt="main"
          />
        </div>
      </div>
      <a href="/support" className="comment-link">
        Comment -&gt;
      </a>
      <div id="details-left">
        <img
          className="side-img"
          src={require("../assets/vlog.jpg")}
          alt="vlog"
        />
        <p className="details">
          Hej,
          <br />
          Trevligt att träffas!
          <br />
          I am currently looking for a job in Sweden:)
          <br />
          Are you interested?
        </p>
        <a href="/effort" className="main-btn">
          Explore -&gt;
        </a>
      </div>
      <div id="details-right">
        <img
          className="side-img"
          src={require("../assets/portfolio_right.jpeg")}
          alt="collection"
        />
        <p className="details">
          No special aptitude,
          <br />
          but persistent effort.
          <br />
          Here I have my job collection that I have worked hard for over a year.
          <br />
          Do you want to look around?
        </p>
        <a href="/collection" className="main-btn">
          View Collection -&gt;
        </a>
      </div>
    </main>
  );
}

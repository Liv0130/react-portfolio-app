import React from "react";
import "./aboutme.css";

export default function AboutMe() {
  return (
    <>
      <div className="aboutme">
        <div className="page-title">
          <p id="title">About me</p>
        </div>
        <div className="intro">
          <div className="img-profile">
            <img
              className="img-group"
              src={require("../assets/profile.jpeg")}
              alt="profile"
            />
          </div>
          <div className="intro-p">
            <h1 id="intro-name">Yeonju Oh (Olivia)</h1>
            <h2 className="sub-title">Outgoing, Rational and Analytical</h2>
            <h2 className="sub-title">
              I believe that there's nothing we can't do in this world,
              <br />
              <span className="pointline"> if we never stop practicing ! </span>
            </h2>
            <p className="intro-paragraph">
              Hej! Trevligt att träffas!
              <br />I am Olivia from South Korea. I have stayed Sweden for 5
              months with my Swedish boyfriend. I am an outgoing person who
              likes to communicate with people and share thoughts together. I
              enjoy reading books, cooking and keeping journal in my free time.
              Currenly searching a job as a junior Frontend developer in Sweden.
            </p>
            <a
              className="link-arrow"
              href="#"
              download="Resume(frontend)_Olivia Oh"
            >
              Download Resume -&gt;
            </a>
          </div>
        </div>
        <div className="intro">
          <div className="intro-reverse-p">
            <h2 className="sub-title">Junior Front-end Developer</h2>
            <h2 className="sub-title">
              Accomplished 7 online courses in 2 years
            </h2>
            <h2 className="sub-title">
              Digging into the code {""}
              <span className="pointline">until I solve the issue</span>
            </h2>
            <p className="intro-paragraph" id="reverse-p">
              Entry-level Front-end developer with proven error shooting,
              research, and analytical skills. Perfectly finished 7 online
              courses including javascript based frameworks, runtime
              environment, python and databases. Certificated from Sparta
              bootcamp finishing 6 months course to be a Front-end developer.
              Seeking a junior Front-end position to grow my career as a
              competent developer.
            </p>
            <a className="link-arrow" href="/collection">
              View Collection -&gt;
            </a>
          </div>
          <div className="img-laptop">
            <img
              className="img-group"
              src={require("../assets/laptop.jpeg")}
              alt="laptop"
            />
          </div>
        </div>
        <div className="intro">
          <div className="img-profile">
            <img
              className="img-group"
              src={require("../assets/dailylife.jpg")}
              alt="dailylife"
            />
          </div>
          <div className="intro-p">
            <h2 className="sub-title">from South Korea to Sweden</h2>
            <h2 className="sub-title">
              Living with a Swedish boyfriend and a cute dog
            </h2>
            <h2 className="sub-title">Prepared for 2 years to be in Sweden</h2>
            <p className="intro-paragraph">
              Our relationship started in Korea in 2019 and we were in a
              long-distance relationship for one and a half year. We have
              prepared to secure our future together in each place and now I am
              here. I planned to come to Sweden and I started to study coding
              for the preparation. I am willing to fight hard and improve faster
              to succeed our goals.
            </p>
            <a
              className="link-arrow"
              href="https://www.youtube.com/@oliviafromsoogie"
              target="_blank"
              rel="noreferrer"
            >
              Check Vlog -&gt;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

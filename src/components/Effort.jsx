import React from "react";
import ReactPlayer from "react-player";
import "./effort.css";

export default function Effort() {
  document.cookie = "safeCookie=foo; SameSite=Lax";
  document.cookie = "safeCookie=foo";
  document.cookie = "crossCookie=bar; SameSite=None; Secure";
  return (
    <>
      <div className="effort">
        <div id="headline">
          <h1>I can show you more!</h1>
        </div>
        {/* YOUTUBE */}
        <section className="youtube">
          <div className="youtube__area">
            <ReactPlayer
              url="https://youtube.com/watch?v=zDa0uvw-YlU&si=EnSIkaIECMiOmarE"
              volume={null}
              muted={true}
              playing={true}
              loop={true}
              id="player"
              width={"100%"}
              height={"77.8%"}
              origin={window.location.host}
            />
          </div>
          <div className="youtube__cover"></div>
        </section>

        <div className="effort-detail">
          <p>
            I am trying to upload my dailylife record on youtube on regular
            basis to track how I have worked!
            <br />
            It is nothing special and sometimes I can just chill in nature, but
            I wanted to share the details to show my personality!
            <br />
            Everybody can fall down, but the most important thing is that we
            shouldn't stop and keep on running. I hope my this trivial youtube
            can cheer up someone who is also fighting hard for the future🥰
          </p>
        </div>

        <div id="video-collection">
          <div className="video-box">
            <a href="https://youtu.be/zDa0uvw-YlU">
              <img
                className="vlog-img"
                src={require("../assets/vlog1.jpg")}
                alt="vlog1"
              />
              <p>
                This is a video I put all my time-lapsed studying clips
                together. I studied about 400 hours from Nov. 2022 to Dec. 2022
                and this video contains my hard working moment! Please Enjoy!
              </p>
            </a>
          </div>
          <div className="video-box">
            <a href="https://youtube.com/watch?v=SRGbHCTpozI&si=EnSIkaIECMiOmarE">
              <img
                className="vlog-img"
                src={require("../assets/vlog.jpg")}
                alt="vlog2"
              />
              <p>
                This is my first vlog that I made last summer! Since it was my
                first time, I looked quite awkward and didn't even know well how
                to find a nice angle😂 But still my effort was sincere!
              </p>
            </a>
          </div>
          <div className="video-box">
            <a
              href="https://youtube.com/watch?v=bGg2S0OG-JM&si=EnSIkaIECMiOmarE"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="vlog-img"
                src={require("../assets/vlog3.jpg")}
                alt="vlog3"
              />
              <p>
                This video is made around Christmas time. It shows well how hard
                I tried to balance between study and my close people. It was not
                easy but I am glad that I could achieve my goals☺️
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

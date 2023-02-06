import React, { useEffect, useState } from "react";
import "./support.css";
import axios from "axios";
import SupportBanner from "./SupportBanner";
import SupportComment from "./SupportComment";
import SupportPost from "./SupportPost";
export default function Support() {
  function toggleMe() {
    // class를 이용해서 active를 붙여주고 창을 보여주고 반대로 active가 이미 있는 경우에는 active를 제거하고 창을 가림
    const writeBox = document.getElementById("write");
    const writeBtn = document.getElementById("writeBtn");
    // 먼저 버튼이 클릭되면   writebox에 class에 active를 추가하고 이미있으면 뺀다

    if (writeBox.className === "writebox") {
      writeBtn.classList.add("active");
      writeBox.className = "writebox-show";
    } else {
      writeBtn.classList.remove("active");
      writeBox.className = "writebox";
    }
  }
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    await axios
      .get("https://olivia-portfolio-app.herokuapp.com/comments")
      .then(async (data) => {
        const comments = data.data;
        setComment(comments);
      });
  }

  return (
    <>
      <div className="support">
        <h1 id="support-head">
          I have people behind who support me to keep running
        </h1>
        <div className="support-gallery">
          <SupportBanner />
          <span
            id="navigation-left"
            className="material-symbols-outlined review-swiper-button-prev"
          >
            arrow_back_ios
          </span>
          <span
            id="navigation-right"
            className="material-symbols-outlined review-swiper-button-next"
          >
            arrow_forward_ios
          </span>
        </div>
        <div className="comment-bubble">
          <div id="myComment">
            <p id="comment-mention">
              Feel free to write any comment about my webpage!
              <br /> All your comments will help me to enhance my webpage!
            </p>
            <div id="writeBtn" className="chat">
              <div className="background"></div>
              <svg
                className="chat-bubble"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                onClick={toggleMe}
              >
                <g className="bubble">
                  <path
                    className="line line1"
                    d="M 30.7873,85.113394 30.7873,46.556405 C 30.7873,41.101961
              36.826342,35.342 40.898074,35.342 H 59.113981 C 63.73287,35.342
              69.29995,40.103201 69.29995,46.784744"
                  />
                  <path
                    className="line line2"
                    d="M 13.461999,65.039335 H 58.028684 C
                63.483128,65.039335
                69.243089,59.000293 69.243089,54.928561 V 45.605853 C
                69.243089,40.986964 65.02087,35.419884 58.339327,35.419884"
                  />
                </g>
                <circle
                  className="circle circle1"
                  r="1.9"
                  cy="50.7"
                  cx="42.5"
                />
                <circle
                  className="circle circle2"
                  cx="49.9"
                  cy="50.7"
                  r="1.9"
                />
                <circle
                  className="circle circle3"
                  r="1.9"
                  cy="50.7"
                  cx="57.3"
                />
              </svg>
            </div>
          </div>
          <SupportPost />
        </div>
      </div>
      <div id="comment-area">
        <div id="comment-board">
          <div className="comment-post">
            <span
              className="material-symbols-outlined profile-icon"
              id="olivia-comment"
            >
              face
            </span>
            <div className="comment-writing-a">
              Any comments will help me to improve my website!
            </div>
          </div>
          {comment.map((d, index) => {
            return (
              <SupportComment
                key={index}
                id={d._id}
                comment={d.comment}
                commentScore={d.score}
                commentDate={d.time}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

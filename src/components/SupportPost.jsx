import React, { useState } from "react";
import axios from "axios";

const checkLength = function () {
  const area = document.getElementById("comment-text");
  const message = document.getElementById("textarea-message");
  const maxLength = 80;
  if (area.value.length <= maxLength) {
    message.innerHTML = maxLength - area.value.length + " characters remaining";
  }
};
setInterval(checkLength, 300);

export default function SupportPost() {
  const [comment, setComment] = useState();
  const [score, setScore] = useState();
  const timeData = new Date();
  const date = timeData.toLocaleDateString();
  const time = timeData.toLocaleTimeString();
  const fullTime = `${date} (${time})`;
  async function handleSubmit() {
    const commentMessage = { comment, score, fullTime };
    await axios
      .post("https://olivia-portfolio-app.herokuapp.com/create", commentMessage)
      .then((res) => {
        alert("Successfully posted message!");
      })
      .catch((err) => {
        alert("Unfortunately couldn't post it. Try again later!");
      });
  }
  return (
    <form>
      <div id="write" className="writebox">
        <div className="post" id="post-box">
          <div className="comment-box">
            <textarea
              id="comment-text"
              className="form-control"
              rows="1"
              maxLength="80"
              placeholder="Leave a comment here"
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <div className="message-holder">
              <p id="textarea-message"></p>
            </div>
          </div>
          <div className="input-group">
            <select
              className="form-select"
              id="star"
              required
              onChange={(e) => setScore(e.target.value)}
              defaultValue={""}
            >
              <option disabled value="">
                -- Choose --
              </option>
              <option value="0">⭐</option>
              <option value="1">⭐⭐</option>
              <option value="2">⭐⭐⭐</option>
              <option value="3">⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>
        <div className="mybtns">
          <button className="box-btn" type="submit" onClick={handleSubmit}>
            Write
          </button>
        </div>
      </div>
    </form>
  );
}

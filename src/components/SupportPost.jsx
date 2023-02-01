import React, { useState } from "react";
export default function SupportPost() {
  const [comment, setComment] = useState();
  const [score, setScore] = useState();
  const timeData = new Date();
  const year = timeData.getFullYear();
  const month = timeData.getMonth() + 1;
  const date = timeData.getDate();
  const hour = timeData.getHours();
  const minute = timeData.getMinutes();
  const second = timeData.getSeconds();
  const dateFormat = month + "-" + date + "-" + year;
  const timeFormat = hour + ":" + minute + ":" + second;
  const time = dateFormat + " (" + timeFormat + ")";
  async function handleSubmit(e) {
    const commentMessage = { comment, score, time };
    await fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentMessage),
    }).then(() => {
      console.log(commentMessage);
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
              placeholder="Leave a comment here"
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
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

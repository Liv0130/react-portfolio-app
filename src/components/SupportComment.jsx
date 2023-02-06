import React from "react";
import axios from "axios";
export default function SupportComment({
  id,
  comment,
  commentScore,
  commentDate,
}) {
  const stars = [
    "⭐️",
    "⭐️⭐️",
    "⭐️⭐️⭐️",
    "⭐️⭐️⭐️⭐️",
    "⭐️⭐️⭐️⭐️⭐️",
  ];
  function onDelete(id) {
    axios
      .delete(`https://olivia-portfolio-app.herokuapp.com/delete/${id}`)
      .then(() => {
        alert("Successfully Deleted!");
        window.location.reload(false);
      });
  }
  const num = +commentScore;
  const star = stars[num];
  const formattedDate = new Date(commentDate).toLocaleString();
  return (
    <div className="comment-post-guest">
      <div className="comment-writing">
        <div className="star-area">
          {star}
          <span>{formattedDate}</span>
        </div>
        <div className="btn-group">
          <p>{comment}</p>
          <button onClick={() => onDelete(id)}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
      <span className="material-symbols-outlined profile-icon">
        account_circle
      </span>
    </div>
  );
}

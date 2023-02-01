import React from "react";
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
  function onDelete() {
    fetch("http://localhost:3001/comments/" + id, {
      method: "DELETE",
    }).then(() => {
      alert("Successfully Deleted!");
      window.location.reload(false);
    });
  }
  const num = +commentScore;
  const star = stars[num];
  return (
    <div className="comment-post-guest">
      <div className="comment-writing">
        <div className="star-area">
          {star}
          <span>{commentDate}</span>
        </div>
        <div className="btn-group">
          <p>{comment}</p>
          <button onClick={onDelete}>
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

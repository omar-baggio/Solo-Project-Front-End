import React from "react";
import "../App.css";
import dayjs from "dayjs";

const Comment = ({ comment }) => {
  return (
    <>
      <section key={comment.comment_id} className="commentbox">
        <h4 className="commentAuthor">{comment.author}</h4>
        <br />
        <br />
        <p className="commentBody">{comment.body}</p>
      </section>
      <p className="created-at">
        {dayjs(comment.created_at).format("MMMM DD, YYYY")}
      </p>
    </>
  );
};

export default Comment;

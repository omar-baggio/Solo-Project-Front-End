import { useContext, useState } from "react";
import { postComment } from "../../Utils/api";
import { useParams, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

const AddComment = ({ setComments }) => {
  const navigate = useNavigate();
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(0);
  const [newComment, setNewComment] = useState("");
  const { loggedInUser, isLoggedIn, handlePrevPath } = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.length === 0) {
      setErrMsg(true);
      return "";
    }
    postComment(newComment, article_id, loggedInUser.username)
      .then((commentFromApi) => {
        setComments((currentComments) => {
          return [commentFromApi, ...currentComments];
        });

        setNewComment("");
        setDisable(true);
        setError(null);
      })
      .catch((error) => {
        setError("Something went wrong, please try again.");
      });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <br />
          {errMsg && newComment.length <= 0 ? (
            <label> Can't Post an empty comment</label>
          ) : (
            ""
          )}
          <label>Add Comment</label>
          <textarea
            placeholder="Write your comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <br />
          <br />
          <br />
          <button>Add Comment</button>
        </form>
      ) : (
        <section>
          <button
            onClick={() => {
              handlePrevPath(window.location.pathname);
              navigate("/users");
            }}
          >
            Sign IN to COMMENT!
          </button>
        </section>
      )}
    </div>
  );
};

export default AddComment;

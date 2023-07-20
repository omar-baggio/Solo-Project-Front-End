import { useState } from "react";
import { postComment } from "../../Utils/api";
import { useParams } from "react-router-dom";

const AddComment = ({ setComments }) => {
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [addComment, setAddComment] = useState({
    username: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(addComment, article_id)
      .then((commentFromApi) => {
        setComments((currentComment) => [...currentComment, commentFromApi]);
      })
      .catch((error) => {
        setError("Something went wrong, please try again.");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Comment</label>
        <input
          placeholder="User Name"
          value={addComment.username}
          onChange={(e) =>
            setAddComment({ ...addComment, username: e.target.value })
          }
        ></input>
        <input
          placeholder="Body"
          value={addComment.body}
          onChange={(e) =>
            setAddComment({ ...addComment, body: e.target.value })
          }
        ></input>
        <button>Add Comment</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AddComment;

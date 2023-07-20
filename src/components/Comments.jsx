import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../../Utils/api";
import { useEffect, useState } from "react";
import Comment from "./Comment";

const Comments = () => {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((dataFromApi) => {
        setComments(dataFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="commentsBox">
      <h3>Comments</h3>

      {isError ? (
        <p>No comments yet</p>
      ) : (
        comments.map((comment, index) => (
          <Comment key={comment.comment_id} comment={comment} index={index} />
        ))
      )}
    </div>
  );
};

export default Comments;

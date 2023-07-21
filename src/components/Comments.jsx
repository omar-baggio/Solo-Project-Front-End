import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../../Utils/api";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";

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
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="commentsBox" key={comments.comment_id}>
      <h3>Comments</h3>

      <AddComment setComments={setComments} />
      {isError ? (
        <p>No comments yet</p>
      ) : (
        comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))
      )}
    </div>
  );
};

export default Comments;

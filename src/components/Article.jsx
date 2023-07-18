import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
import { getArticleById } from "../../Utils/api";
import dayjs from "dayjs";
import Comments from "./Comments";
import Votes from "./Votes";

const Article = () => {
  const { article_id } = useParams();

  const [newArticle, setNewArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then((dataFromApi) => {
        setNewArticle(dataFromApi);
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
    <div className="singleArticle">
      <h1>{newArticle.title}</h1>
      <h2>Topic: {newArticle.topic} </h2>
      <img className="imgArticle" src={newArticle.article_img_url} />
      <Votes />
      <p>
        <br />
        {newArticle.body}
      </p>
      <p className="created-at">
        Created at: {dayjs(newArticle.created_at).format("MMMM DD, YYYY")}
      </p>

      <Comments />
    </div>
  );
};

export default Article;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
import { getArticleById } from "../../Utils/api";

const Article = () => {
  const { article_id } = useParams();

  const [newArticle, setNewArticle] = useState({});
  const [isloading, setIsLoading] = useState(true);
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

  if (isloading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="singleArticle">
      <h1>{newArticle.title}</h1>
      <h2>Topic: {newArticle.topic} </h2>
      <img src={newArticle.article_img_url} />
      <p>
        Item details <br />
        {newArticle.body}
      </p>
      <p>Created at:{newArticle.created_at}</p>
    </div>
  );
};

export default Article;

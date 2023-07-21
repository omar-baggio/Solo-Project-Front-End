import { useEffect, useState } from "react";
import { getArticles } from "../../Utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticles()
      .then((dataFromApi) => {
        setArticles(dataFromApi);
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
    <>
      <h1>Article List</h1>

      {isError ? (
        <p>Error! Please try again</p>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))
      )}
    </>
  );
};

export default ArticlesList;

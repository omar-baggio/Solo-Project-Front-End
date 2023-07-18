import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Topics from "./components/Topics";
import Users from "./components/Users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> NC News </h1>
      <div className="NavBar">
        <Link className="NavHeading" to="/topics">
          {" "}
          Topics{" "}
        </Link>{" "}
        <Link className="NavHeading" to="/users">
          {" "}
          Users{" "}
        </Link>{" "}
        <Link className="NavHeading" to="/articles">
          {" "}
          Articles{" "}
        </Link>
      </div>
      <Routes>
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;

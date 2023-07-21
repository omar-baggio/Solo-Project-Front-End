import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

function UserCard({ user }) {
  const { setLoggedInUser, isLoggedIn, setIsLoggedIn, prevPath } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedInUser(user);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(prevPath);
    }
  }, [isLoggedIn, prevPath, navigate]);

  return (
    <div>
      <section className="articlesbox">
        <h2>{user.username}</h2>
        <img className="imgList" src={user.avatar_url} alt="" />
        <h3>{user.name}</h3>
        <button onClick={handleLogin}>Login</button>
      </section>
    </div>
  );
}

export default UserCard;

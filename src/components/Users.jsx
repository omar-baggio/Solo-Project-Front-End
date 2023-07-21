import React, { useEffect, useState } from "react";
import { getUsers } from "../../Utils/api";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUsers()
      .then((dataFromApi) => {
        setUsers(dataFromApi);
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
    <div>
      <h1>Users</h1>
      {isError ? (
        <p>Error! Please try again</p>
      ) : (
        users.map((user) => <UserCard key={user.username} user={user} />)
      )}
    </div>
  );
};

export default Users;

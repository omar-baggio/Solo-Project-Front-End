import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prevPath, setPrevPath] = useState("/");

  const handlePrevPath = (path) => {
    setPrevPath(path);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        loggedInUser,
        setLoggedInUser,
        isLoggedIn,
        setIsLoggedIn,
        prevPath,
        setPrevPath,
        handlePrevPath,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

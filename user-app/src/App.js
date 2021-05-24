import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (newUsername, newAge) => {
    setUsersList((prevList) => {
      return [...prevList, {name:newUsername, age:newAge, id: Math.random.toString()}]
    });
  };


  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length!==0 && <UsersList users={usersList} />}
    </div>
  );
};

export default App;

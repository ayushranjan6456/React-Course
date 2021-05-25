import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (newUsername, newAge) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: newUsername, age: newAge, id: Math.random.toString() },
      ];
    });
  };

  return (
    //Using Fragment here, either <Wrapper or <>  </> could be used or <React.Fragment></React.Fragment> could be used

    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length !== 0 && <UsersList users={usersList} />}
    </React.Fragment>
  );
};

export default App;

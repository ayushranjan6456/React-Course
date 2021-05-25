import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  //Using State
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  //Using Ref
  const usernameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    //check is username or age is empty
    //using ref
    const enteredUsername = usernameRef.current.value;
    const enteredAge = ageRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Inavlid format",
        message: "Please Enter valid username and age (not empty)",
      });
      return;
    }
    // check if integer of enteredage is > 1
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid Age (>1)",
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    usernameRef.current.value='';
    ageRef.current.value='';
  };

  const errorHandler = () => {
    setError();
    usernameRef.current.value='';
    ageRef.current.value='';
  };

  //Used only if we use state, here we are using refs
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  return (
    //Using Wrapper here, either <Wrapper or <>  </> could be used or <React.Fragment></React.Fragment> could be used
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={usernameRef}
            //value={enteredUsername}  for state
            // onChange={usernameChangeHandler} 
          />
          <label htmlFor="age">Age[Years]</label>
          <input
            id="age"
            type="number"
            ref={ageRef}
            // value={enteredAge}
            // onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

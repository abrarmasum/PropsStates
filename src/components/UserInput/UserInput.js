import { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./UserInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredname = nameInputRef.current.value;
    const enteredage = ageInputRef.current.value;

    if (enteredname.trim() === "" || enteredage.trim() === "") {
      console.log("Invalid input");
      setError({
        header: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    } else if (+enteredage < 1) {
      setError({ header: "Invalid age", message: "Please enter a valid age" });
      console.log("Age should be greater than 1");
      return;
    } else {
      console.log("else");
      props.onAddUser({
        name: enteredname,
        age: enteredage,
        id: Math.random(),
      });
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          header={error.header}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (years)</label>
          <input
            type="text"
            id="age"
            ref={ageInputRef}
            // onChange={(e) => setName(e.target.value)}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;

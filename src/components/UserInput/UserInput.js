import { useState } from "react";
import Card from "../UI/Card";
import classes from "./UserInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || age.trim() === "") {
      console.log("Invalid input");
      setError(
        {header: "Invalid input",
        message: "Please enter a valid name and age",}
      )
      return;
    }
    else if(+age<1){
      setError(
        {header: "Invalid age",
        message: "Please enter a valid age",}
      )
      console.log("Age should be greater than 1");
      return;

    }
    else {
      console.log('else');
      props.onAddUser({ name, age ,id:Math.random()});
      setName("");
      setAge("");
      setIsValid(true);
    }
   
 
  };

  const errorHandler = () => {
    setError(null);
  };


  return (
    <div>
      {error && <ErrorModal header={error.header} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
      
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        onChange={onNameChange}
        value={name}
      />
      <label htmlFor="age">Age (years)</label>
      <input
        type="text"
        id="age"
        onChange={onAgeChange}
        value={age}
        // onChange={(e) => setName(e.target.value)}
      />
   
    <Button type="submit">Add User</Button>
  </form>
    </Card>
    </div>
  );
};

export default UserInput;

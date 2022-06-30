import { useState } from "react";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddUser({ name, age, id: Math.random() });
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Add new users</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInput;

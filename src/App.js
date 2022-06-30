import "./App.css";
import React, { useState } from "react";
import UsersList from "./components/UsersList/UsersList";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [users, setUsers] = useState([
    { name: "Mehedi", age: 28, id: 1 },
    { name: "Faisal", age: 30, id: 2 },
  ]);

  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (users.length > 0) {
    content = <UsersList items={users} />;
  }

  const addUser = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <section className="user-form">
        <UserInput onAddUser={addUser} />
      </section>

      <section className="users">{content}</section>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    e.target.name == "name"
      ? setName(e.target.value)
      : setEmail(e.target.value);
  };
  // const handleEmailChange = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { name, email };
    console.log(data);
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div>
          <label>Name :</label>
          <input type="text" value={name} name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [User, Setuser] = useState("");
  const [Pass, Setpass] = useState("");
  const [flag, Setflag] = useState(null);

  let Authenticate = (e) => {
    e.preventDefault();
    if (User === "user" && Pass === "password") {
      Setflag(true);
    } else {
      Setflag(false);
    }
  };
  return (
    <>
      <h1>Login Page</h1>

      {flag === false && <p>Invalid username or password</p>}
      {flag === true && <h2>Welcome, {User}!</h2>}
      <form onSubmit={Authenticate}>
        <label htmlFor="name">Username</label>
        <input
          required
          id="name"
          value={User}
          onChange={(e) => Setuser(e.target.value)}
          placeholder="Enter username"
        />

        <br />
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          required
          value={Pass}
          type="password"
          onChange={(e) => Setpass(e.target.value)}
          placeholder="Enter password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default App;

import { useState } from 'react'
import './App.css'

function App() {
  
  const[User,Setuser] = useState("");
  const[Pass,Setpass] = useState("");
  const [flag,Setflag] = useState(null);

  let Authenticate = () =>{

     if(User === "user" && Pass === "password")
     {
      Setflag(true);
     }else{
      Setflag(false);
     }

  }

  return (
    <>
    <h1>Login Page</h1>

    {/* Show error message above the form if login is incorrect */}
    {flag === false && <p>Invalid username or password</p>}
    {flag === true && <h2>Welcome, {User}!</h2>}
    <label>
      Username:
      <input required onChange={(e) => Setuser(e.target.value)} placeholder="Enter username" />
    </label>
    <br />
    <label>
      Password:
      <input required type="password" onChange={(e) => Setpass(e.target.value)} placeholder="Enter password" />
    </label>
    <br />
    <button onClick={Authenticate}>Submit</button>

    {/* Show "Welcome, user!" below the form if login is successful */}
   
  </>
  )
}

export default App

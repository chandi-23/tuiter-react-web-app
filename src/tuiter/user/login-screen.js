import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunk";
function LoginScreen() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleLogin = async () => {
  try {
    const resp = await dispatch(loginThunk({ username, password }));
    
    if (resp.error){
      //console.log("response status", resp.error)
      alert("invalid username/password")
      setUsername("")
      setPassword("")
    }
    else{
      navigate("/tuiter/profile");
    }

    
  } catch (e) {
    alert(e);
  }
 };
 return (
    <div>
     <h1>Login Screen</h1>
     <div className="mt-2">
      <label>Username</label>
      <input className="form-control" type="text" value={username}
       onChange={(event) => setUsername(event.target.value)}/>
     </div>
     <div className="mt-2">
       <label>Password</label>
       <input className="form-control" type="password" value={password}
         onChange={(event) => setPassword(event.target.value)}/>
     </div>
     <div>
        <a href={"/tuiter/register"}>Click here to register!</a>
     </div>
     <button className="btn btn-primary mt-2"
             onClick={handleLogin}>
       Login
     </button>
     
    </div>
   );
  
}
export default LoginScreen;
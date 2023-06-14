import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk, registerThunk } from "../services/auth-thunk";

function RegisterScreen() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [firstname, setFirstname] = useState("");
 const [lastname, setLastname] = useState("");
 //const [_id, set_id] = useState("");
 //const num = Math.floor(Math.random() * 1000);

 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleRegister = async () => {
    if (!firstname || !lastname || !username || !password) {
        alert("All fileds are mandatory");
        setUsername("")
        setFirstname("")
        setLastname("")
        setPassword("")
        return;
    }
  try {
    const resp = await dispatch(registerThunk({ firstname, lastname, username, password }));
    
    if (resp.error){
      //console.log("response status", resp.error)
      alert("invalid username/password")
      setUsername("")
      setPassword("")
      setFirstname("")
      setLastname("")
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
     <h1>Register Screen</h1>
     <div className="mt-2">
      <label>First Name</label>
      <input className="form-control" type="text" value={firstname}
       onChange={(event) =>{
        setFirstname(event.target.value);
        }
       }  />
     </div>
     <div className="mt-2">
      <label>Last Name</label>
      <input className="form-control" type="text" value={lastname}
       onChange={(event) => setLastname(event.target.value) }/>
     </div>
     <div className="mt-2"></div>
     <div className="mt-2">
      <label>Username</label>
      <input className="form-control" type="text" value={username}
       onChange={(event) => setUsername(event.target.value)}/>
     </div>
     <div className="mt-2">
       <label>Set Password</label>
       <input className="form-control" type="password" value={password}
         onChange={(event) => setPassword(event.target.value)}/>
     </div>

     <button className="btn btn-primary mt-2"
             onClick={handleRegister}>
       Register
     </button>
     
    </div>
   );
  
}
export default RegisterScreen;
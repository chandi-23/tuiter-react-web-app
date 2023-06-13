import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, updateUserThunk, logoutThunk } from "./services/auth-thunk";

function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 const [profile, setProfile] = useState(currentUser);
 //console.log("fetched profile is:",profile)
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const save = () => { dispatch(updateUserThunk(profile)); };

 useEffect(() => {
        async function fetchData() {
         const {payload} = await dispatch(profileThunk());
          setProfile(payload);
        }
    fetchData();
    },[]);
    
    const handleLogout = async () => {
      try {
         dispatch(logoutThunk());
          navigate("/tuiter/login");
        
      } catch (e) {
        alert(e);
      }
    }
 return (
  <div>
   <h1>Profile Screen</h1>
   {profile && (<div>
     <div>
      <label>First Name</label>
      <input type="text" value={profile.firstname}
       onChange={(event) => {
        const newProfile = {
         ...profile, firstname: event.target.value,
        };
        setProfile(newProfile);
       }}/>
     </div>
     <div>
      <label>Last Name</label>
      <input type="text" value={profile.lastname}
       onChange={(event) => {
        const newProfile = {
         ...profile, lastname: event.target.value,
        };
        setProfile(newProfile);
       }}/>
     </div></div>
   )}
   <button class="btn btn-danger m-2"
    onClick= {handleLogout}>                   Logout</button>
   <button class="btn btn-secondary m-2" onClick={save}>Save  </button>
  </div> );


}
export default ProfileScreen;
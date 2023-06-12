import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {

  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser)
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const isDefaultActive = !active || active === "home";

 //console.log("Default checking boolean", !active ,isDefaultActive)
 return (
   <div className="list-group">
     <Link to={"/tuiter/home "} className={`list-group-item
                ${isDefaultActive? "active" : ""}`}>Home</Link>
     <Link to={"/tuiter/explore "} className={`list-group-item
                ${active === "explore" ? "active" : ""}`}>Explore</Link>
     <Link to={"/tuiter/notifications "} className={`list-group-item
                ${active === "notifications" ? "active" : ""}`}>Notifications
     </Link>
     <Link to={"/tuiter/messages "} className={`list-group-item
                ${active === "messages" ? "active" : ""}`}>Messages</Link>
     <Link to={"/tuiter/bookmarks "} className={`list-group-item
                ${active === "bookmarks" ? "active" : ""}`}>Bookmarks</Link>
     <Link to={"/tuiter/lists "} className={`list-group-item
                ${active === "lists" ? "active" : ""}`}>Lists</Link>

     <Link to={"/tuiter/more "} className={`list-group-item
                ${active === "more" ? "active" : ""}`}>More</Link>
    {!currentUser && <Link className={`list-group-item
                ${active === "login" ? "active" : ""}`} to="/tuiter/login">   Login   </Link>}
     {!currentUser && <Link className={`list-group-item
                ${active === "register" ? "active" : ""}`} to="/tuiter/register">Register</Link>}
     { currentUser && <Link className={`list-group-item
                ${active === "profile" ? "active" : ""}`} to="/tuiter/profile"> Profile </Link>}

   </div>
 );
};
export default NavigationSidebar;
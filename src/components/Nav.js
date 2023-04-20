import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
  return (
   <>
   <nav>
    Get ready to complete your task
   </nav>
      <div className="Header">
      <Link to="/Home">Home</Link>
        <Link to="/Contact">Contact</Link> 
          <Link to="/About">About</Link>
          <Link to="/user/tempId">user</Link>
      </div>
   
   </>
   )
  
};

export default Nav;


import React, {useState } from "react";
import Popup from "./Popup";
import "./UserCard.css";

const UserCard=({user, index, handleEdit, handleDelete})=>{
  const [popUp, setPopUp]=useState(false);  
  const handlePopup=()=>{
    setPopUp(!popUp);
}    
 return(
            <div className="usercard-div">
            <p> I am <b><i>{user.name}</i></b>.</p>
          <p>My email id is <b><i>{user.email}</i></b></p>
          <p> I live here : {user.address}</p>
            <div className="button-add-and-delete">
                <button id="button-add" onClick={()=>handleEdit(index)}>Edit</button>
                <button id="button-delete"onClick={handlePopup}>Delete</button>
            </div>
            {popUp ? ( <Popup  handlePopup={handlePopup} handleDelete={handleDelete} index={index}/>):null}
            </div>
        )
}
export default UserCard;
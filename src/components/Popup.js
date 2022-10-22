import React from "react";
import "./Popup.css";
const PopUp=({handlePopup, handleDelete, index})=>{
    const handleNo=()=>{
        handlePopup();
    }
    return(
        <div className="modal">
            <div className="modal-content">
                <p>Do you really want to delete?</p>
           
             <button id="btn-yes" onClick={()=>handleDelete(index)}>Yes</button>
             <button id="btn-no" onClick={handleNo}>No</button>
             </div>
        </div>
    )
}
export default PopUp;
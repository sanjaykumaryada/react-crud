import React, { useState } from "react";
import UserCard from "./UserCard";
import "./Crud.css";
function CRUD(){
    const [user, setUser]=useState({ name:"", email:"", address:""});
    const [userList,setUserList]=useState([]);
    const [show,setShow]=useState(false)
    const [editIndex,setEditIndex]=useState();
     
    const handleAdd=()=>{
        if(user.name.length > 3 && user.email.length>5){
            userList.push(user);
          setUser({
            name:"",
            email:"",
            address:""
          })
     }
    }
    const handleDelete=(index)=>{
        userList.splice(index,1)
        setUserList([...userList])
    }

    const handleEdit=(i)=>{
           setUser(userList[i]);
        setShow(true)
        setEditIndex(i)
    }
    const handleUpdate=()=>{
        userList.splice(editIndex,1,user)
        setUserList([...userList])
        setShow(false)
        setUser({
            name:"",
            email:"",
            address:""
          })
    }
    return(
        <div>
            <h1>CRUD React App</h1>
           
            <div className="main-input-div">
            
            <form className="form-div">
                <div className="name">
                <label htmlFor="name">Name:</label>
            <input
             type="text"
             required
              placeholder=" Enter Your Name"
              value={user.name}
              onChange={(e)=>setUser({...user,name:e.target.value })}
              />
            </div>
            <div className="email">
            <label htmlFor="email">Email:</label>
            <input 
            type="email"
            required
          placeholder="Enter your Email" 
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            />
             </div>
           
            <div className="textarea-box">
                <label htmlFor="address">Address:</label>
            <textarea 
            name="comment"
             placeholder="Enter your address here..."
              value={user.address}
            required
              onChange={(e)=>setUser({...user,address:e.target.value})}
             ></textarea>
            </div>
            
                 {!show?<button onClick={handleAdd}>Add</button>:
                 <button onClick={handleUpdate}>Update</button>}
             </form>
        </div>
           <div className="main-user-div">
            {
                 userList.length < 1 ?(
                    
                        <h2>Please add Users</h2>
                    
                 ):(
                    userList.map((val,i)=>
            
                    <div>
        
                        <UserCard user={val} key={i} index={i} handleEdit={handleEdit} handleDelete={handleDelete}/>
                    </div>
                    )
                 )
            }
            </div>
        </div>
    );
}
export default CRUD; 

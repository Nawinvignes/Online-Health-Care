import { TextField } from "@mui/material"
import '../Assets/Signin.css'
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

import axios from "axios";
export const Signin =()=>{
    const navigate=useNavigate();
    const[mail,setmail]=useState('');
    const[pass,setpass]=useState('');
    useEffect(()=>{
      document.title='Signin';
    })
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(mail,pass)
      axios.get(`http://localhost:3001/user?mail=${mail}&pass=${pass}`)
      .then(res=>{
        if(res.data.length>0){
          alert("log in Succesful")
            navigate('/home')
        }
        else{
          alert('Invalid username or password')
        }
      })
    }
    return(
        <div className="divi">
       <div id="ch2"className="division" >
        <form onSubmit={handleSubmit}id="ch2"className="division">
            <TextField variant="outlined" label="Mail ID" className="tf" value={mail} onChange={(event)=>{setmail(event.target.value)}} required/><br/>
            <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          value={pass}
          onChange={(event)=>{setpass(event.target.value)}}
          autoComplete="current-password"
          variant="outlined"
        /><br/>
            <Link to="/signup">Don't Have an Account? Sign Up</Link><br/>
            <Link to="/client">
              <button className="submit" type='submit'>Sign In</button>
            </Link>
          </form>
        </div>
        </div>
        )
}
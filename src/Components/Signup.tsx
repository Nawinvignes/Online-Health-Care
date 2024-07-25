import { TextField } from "@mui/material"
import {Eye} from 'lucide-react';
import {EyeOff} from 'lucide-react';
import {useState} from'react'
import '../Components/Style.css'
export const Signup=()=>{
    const[pass,setpass]=useState(true)
    const[status,setstatus]=useState(false)
    const visib=()=>{
        setpass(!pass);
    }
    const signin=()=>{
        setstatus(!status)
        // setst(!status)
    }
    return(
        <div>
        {pass?<Signup/>:null}
        <TextField variant="outlined" label="Website Address"/><br/>
            <TextField variant="outlined" label="Your Name" className="tf"/><br/>
            <TextField variant="outlined" label="Mail ID" className="tf"/><br/>
            <TextField variant="outlined" label="Contact Number" className="tf"/><br/>
            <button onClick={visib} className="eye1">{pass?<Eye/>:<EyeOff/>}</button>
            <TextField type={pass?"password":"text"} variant="outlined" label="Password"/><br/>
            <p>Already An User?</p>
            <button className="sign" onClick={signin}>Sign In</button>
            <button className="submit">Sign Up</button>
            <div>
            <TextField variant="outlined" label="Mail ID" className="tf"/><br/>
            <TextField type={pass?"password":"text"} variant="outlined" label="Password"/><br/>
            <p>Don't Have an Account?</p>
            <button className="sign" onClick={signin}>Sign Up</button>
    </div>        
        </div>
        
        
        )
}
   
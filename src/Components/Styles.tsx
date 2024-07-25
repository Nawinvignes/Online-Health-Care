import { TextField } from "@mui/material"
import {Eye} from 'lucide-react';
import {EyeOff} from 'lucide-react';
import {useState} from'react'
import '../Components/Style.css'
export const Styles=()=>{
    const[pass,setpass]=useState(true)
    const[status,setstatus]=useState(true)
    const visib=()=>{
        setpass(!pass);
    }
    const signin=()=>{
        setstatus(!status)
        // setst(!status)
    }
    // const styles1=()=>({
    //     textField:{
    //         width: '90%',
    //         marginLeft: 'auto',
    //         marginRight: 'auto',
    //         color: 'black',
    //         paddingBottom: 0,
    //         marginTop: 0,
    //         fontWeight: 500
    //     }
    // })
    return(
        <>
        <div id="ch1" className={status?"division":"hid"}>
        <TextField variant="outlined" sx={{borderStyle:"double"}} label="Website Address" required/><br/>
            <TextField variant="outlined" label="Your Name" className="tf" required/><br/>
            <TextField variant="outlined" label="Mail ID" className="tf"required/><br/>
            <TextField variant="outlined" label="Contact Number" className="tf" required/><br/>
            <button onClick={visib} className="eye1">{pass?<Eye/>:<EyeOff/>}</button>
            <TextField type={pass?"password":"text"} variant="outlined" label="Password" sx={{zIndex:0}}/><br/>
            <p>Already An User?</p>
            <button className="sign" onClick={signin}>Sign In</button>
            <button className="submit">Sign Up</button>
            </div>      
            <div id="ch2"className={status?"hid":"division"}>
            <TextField variant="outlined" label="Mail ID" className="tf" required/><br/>
            <TextField type={pass?"password":"text"} variant="outlined" label="Password" required/><br/>
            <button onClick={visib} className="eye12">{pass?<Eye/>:<EyeOff/>}</button>
            <p>Don't Have an Account?</p>
            <button className="signup" onClick={signin}>Sign Up</button>
            <button className="submit">Sign In</button>
        </div>
        </>
        )
}
   
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Button, AppBar, Toolbar} from '@mui/material';
import '../Assets/Home.css';
import './HomeAfterSigin.css';
import image1 from '../Components/pngwing.com.png';
import Marquee from "react-fast-marquee";
import { BiLogoFacebookCircle } from "react-icons/bi";
import image3 from './Health-GettyImages-1352002426-269446216bca49059da9966e4126f3f3.jpg'
import image4 from '../img/88712295.webp'
import image5 from './istockphoto-1355976151-612x612.jpg'
import image6 from '../img/stomachpain.jpg'
import image7 from './download.jpeg'
import image8 from './istockphoto-1360229262-612x612.jpg'
import image9 from './young-beautiful-brunette-girl-frowning-touching-temples-headache-isolated-white-background_176420-9854.avif'
import image11 from '../img/2002.i039.010_chatbot_messenger_ai_isometric_set-01.jpg'
import image12 from '../img/20945534.jpg'
import Footer from './Footer1';
export const HomeAfterSignin=()=>{

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick12 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl2(null);
  };
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl2);
  useEffect(()=>{
    document.title='Home';
  })
  return (
    <div className='homepage'>
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' ,backgroundColor:'#333'}}>
        <div className='logoo'>
          <img src={image12} id='logopic'/>
          <h1 id ='title1'><em>AI HealthCare</em></h1>
        </div>
      </Toolbar>
    </AppBar>
  <div>
    <div id="tempp">
        <div id="temp2">
            <h1>Please Enter Your Details:</h1>
            <p>Trusted | Life Changing | Secure</p>
        </div>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required></input>
          <label for="age">Age:</label>
          <input type='number' id='age' name='age' required></input>
          <label for="sex">Sex:</label>
          <select id='sex' name='sex' required>
            <option value={""}disabled selected>Select Your Sex</option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
            <option value={"Other"}>Other</option>
          </select>
          <label for='address'>Address:</label>
          <input type='text' id='address' name='address' required></input>
          <input type ='submit' id='submit' value={"Submit"}></input>
        </form>
    </div>
    <div id="medic2"><p></p></div>
    <div id="medic3"><p></p></div>
    <div id="medic4"><p></p></div>
    <div id="medic5"><p></p></div>
    <div id="medic6"><p></p></div>
    <div id="medic7"><p></p></div>
    <div id="medic8"><p></p></div>
    <div id="medic9"><p></p></div>
  </div>

  <hr></hr>
  <Footer/>
  </div>
  );
};
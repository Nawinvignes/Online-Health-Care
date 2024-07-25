import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Button, AppBar, Toolbar} from '@mui/material';
import '../Assets/Home.css';
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
export const Home=()=>{

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
    document.title='HomePage';
  })
  return (
    <div className='homepage'>
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' ,backgroundColor:'#333'}}>
        <div className='logoo'>
          <img src={image12} id='logopic'/>
          <h1 id ='title1' style={{marginTop:"14px"}}><em>AI HealthCare</em></h1>
        </div>
      <div>
      <Button
  style={{
    borderRadius: '10px',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '17px',
    fontFamily: 'revert-layer', // Adjust the font size as needed
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
    textTransform: 'none',
    cursor: 'pointer',
  }}
  onClick={handleClick}
>
  Solutions
</Button>

        <Popover
        id="grid-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        style={{ marginTop:'25px'}}
        >
         <div className='navbarele'onMouseLeave={handleClose} >
            <div className='one1'>
                <h2><em><br></br>Experience the power of AI in healthcare</em></h2> 
                <div>
                  <b>Find out the probability of diseases</b>
                  <p></p>Submit anonymized details regarding your medical history, test results, and current <br></br>condition. Receive comprehensive differential diagnosis (DDx) - a list of potential diseases with their probabilities.
                  </div> 
                  <br></br>
                <div>
                  <b>Generate your health report</b>
                  <p>Generate a comprehensive health report based on your conversation with our AI Health Assistant.</p>
                  </div> 
            </div>
            <div className='one1' id='chhhh'> 
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div>
                  <b>Get a clinical plan</b>
                  <p>Discover what examinations are needed for the proposed differential diagnosis. Prepare yourself for the upcoming steps with a comprehensive understanding of the required examinations.</p>
                  </div> 
                <div>
                  <b>Notable:</b>
                  <p>AI Health Assistant is for informational purposes only. Don’t take any actions without a doctor’s validation or consultation.</p>
                  </div> 
                  <br></br>
            </div>
            <div className='one1'>
              <br></br><br></br>
                <h2><em>Show You Care:</em></h2>
                <p>Help your friends and family make informed decisions about their health by sharing Docus with them.</p>
                <br></br>
            </div>
         </div>
      </Popover>
      <Button
  style={{
    borderRadius: '10px',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '17px',
    fontFamily: 'revert-layer' ,// Adjust the font size as needed
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
    textTransform: 'none',
    cursor: 'pointer',
  }}
  aria-controls="simple-menu"
  aria-haspopup="true"
  onClick={handleClick12}
>
  Use Cases
</Button>

        <Popover
        id="grid-menu"
        open={open1}
        anchorEl={anchorEl}
        onClose={handleClose1}
        anchorOrigin={{
            vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right ',
        }}
        style={{ marginTop:'20px'}}
        >
         <div className='navbarele' onMouseLeave={handleClose1}>
            <div className='one1'>
              <br></br><br></br>
                <h2>For Individuals:</h2> 
                <div>
                  <b>Personalized AI Health Assistant</b>
                  <p>Ask any health-related questions. Docus AI Health Assistant knows you, remembers you, and assists you 24/7 like no other.</p>
                  </div> 
                <div>
                  <b>Chat Attachments</b>
                  <p>Upload your health records and test results directly within your chat for deeper AI insights and personalized recommendations.</p>
                  </div> 
            </div>
            <div className='one1'> 
            <br></br>
            <h2>For Doctors:</h2> 
                <div>
                  <b>AI-Driven Clinical Insights</b>
                  <p>Engage in real-time conversations with Docus AI Assistant for your patient cases. Upload medical records and test results to receive detailed insights and identify potential red flags.</p>
                  </div> 
                <div>
                  <b>In-Depth Reports</b>
                  <p>Generate detailed medical reports based on AI analysis and your input.</p>
                  </div> 
            </div>
            <div className='one1'>
              <br></br><br></br>
                <h2>For Employers</h2>
                <div>
                  <b>Instant Health Insights</b>
                  <p>AI Health Assistant provides quick and accurate health assessments, ensuring your employees get timely advice and care.</p>
                  </div> 
                <div>
                  <b>Proactive Health Management</b>
                  <p>With personalized health monitoring and recommendations, employees can catch potential issues early, reducing long-term healthcare costs.</p>
                  </div> 
                  </div>
            </div>
        </Popover>
        <Link to="/signin" className="custom-link">Sign in</Link>
      <Link to="/signup"className="custom-link">Sign up</Link> 
      </div>
      </Toolbar>
    </AppBar>
    <div className='Container2'>
    <div className='item1'>
      <img src={image11}/>
    </div>
    <div className='item2'><br></br>
      <p className='fade-in-text'>
        <br></br>
        <h1><em>"Take Control of Your Health Journey<br></br> with AI HealthCare"</em></h1>
        <h5>In a world where information is everywhere, but accurate medical advice is rare, Docus provides you with an intelligent healthcare companion.</h5>
      </p>
    </div>
  </div>
  <hr></hr>
  <div className='Partners'>
    <h1>Are You Ready to Take Control of Your Health?</h1>
  </div>
  <div>
    <br></br>
    <br></br>
    <Marquee>
      <div className='chap'>
        <div>
          <img src={image3}/>
        </div>
        <div>
          <img src={image4}/>
        </div>
        <div>
          <img src={image5}/>
        </div>
        <div>
          <img src={image6}/>
        </div>
        <div>
          <img src={image7}/>
        </div>
        <div>
          <img src={image8}/>
        </div>
        <div>
          <img src={image9}/>
        </div>
      </div>
    </Marquee>
    <br></br>
    <br></br>
  </div>
  <hr></hr>
  <div>
    <div id="tempp">
        <div id="temp2">
            <h1>Why it’s Fantastic</h1>
            <p>Trusted | Life Changing | Secure</p>
        </div>
        <div id="super">
          <div className='supercls'>
            <h2>Advanced natural language understanding</h2>
            <p className='block'>Our AI model has an improved understanding of natural language, enabling it to better comprehend and respond to complex health-related questions and concerns.</p>
          </div>
          <div className='supercls'>
            <h2>Personalized assistance</h2>
            <p className='block'>The AI model is designed to provide personalized virtual health assistance and recommendations tailored to an individual's medical history, and symptoms offering valuable insights for users.</p>
          </div>
          <div className='supercls'>
            <h2>Accessibility</h2>
            <p className='block'>As an AI-driven solution, it is available round-the-clock, making it a convenient source of health information for users at any time.</p>
          </div>
        </div>
        <br></br>
        <br></br>
    </div>
  </div>
  <hr></hr>
  <Footer/>
  </div>
  );
};
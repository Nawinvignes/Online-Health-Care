import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../Assets/Ilness.css'
import { Link } from 'react-router-dom';

const Ilness = ({client}) => {

    const [displayText, setDisplayText] = useState('');
  const [letters, setLetters] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  console.log(client);

  useEffect(() => {
    let responseText = '';
    if (client.age < 6||client.age>50) {
      responseText =
        "Hi " +
        client.name +
        ". It seems that your age should be taken care of and treated carefully.\n" +
        "Prescription---\n" +
        "Please go and consult the doctor";
    }
    else if(client.symtoms=="fever")
    {
        responseText = "Hi " + client.name +"\n"+"it seems that you have fever."+"\n"+"Prescription---"+"\n"+"Please take "+"PARACETAMOL-125 Mg"+" after eating food for breakfast lunch and dinner"+"An extra dose can be taken but not more than one"+"\n"+"If fever didn't cure immediately visit the doctor nearby.NOTE(More than 4g per day is pisonous). Thank you...";
    }
    else if(client.symtoms=="Headache")
    {
        responseText = "Hi " + client.name +"\n"+"it seems that you have Headache."+"\n"+"Prescription---"+"\n"+"Please take "+"Naproxen sodium (Aleve)"+" after eating food for breakfast lunch and dinner"+"An extra dose can be taken but not more than one"+"\n"+"If fever didn't cure immediately visit the doctor nearby.NOTE(More than 4g per day is pisonous). Thank you...";
    }
    else if(client.symtoms=="Stomach Pain")
    {
        responseText = "Hi " + client.name +"\n"+"it seems that you have Stomach Pain."+"\n"+"Prescription---"+"\n"+"Please take "+"Loperamide (Imodium)"+" after eating food for breakfast lunch and dinner"+"An extra dose can be taken but not more than one"+"\n"+"If fever didn't cure immediately visit the doctor nearby.NOTE(More than 4g per day is pisonous). Thank you...";
    }
    else if(client.symtoms=="Sore Throat")
    {
        responseText = "Hi " + client.name +"\n"+"it seems that you have Sore Throat."+"\n"+"Prescription---"+"\n"+"Please take "+"Acetaminophen (Tylenol)"+" after eating food for breakfast lunch and dinner"+"An extra dose can be taken but not more than one"+"\n"+"If fever didn't cure immediately visit the doctor nearby.NOTE(More than 4g per day is pisonous). Thank you...";
    }
    else if(client.symtoms=="Vomiting")
    {
        responseText = "Hi " + client.name +"\n"+"it seems that you have Vomiting."+"\n"+"Prescription---"+"\n"+"Please take "+"Diphenhydramine"+" after eating food for breakfast lunch and dinner"+"An extra dose can be taken but not more than one"+"\n"+"If fever didn't cure immediately visit the doctor nearby.NOTE(More than 4g per day is pisonous). Thank you...";
    }
    else if(client.symtoms=="Constipation")
    {
        responseText = "Hi " + client.name +"\n"+"it seems that you have Constipation."+"\n"+"Prescription---"+"\n"+"Please take "+"Dulcolax"+" after eating food for breakfast lunch and dinner"+"An extra dose can be taken but not more than one"+"\n"+"If fever didn't cure immediately visit the doctor nearby.NOTE(More than 4g per day is pisonous). Thank you...";
    }
  

    if (responseText) {
      
      const lettersArray = responseText.split('');
      setLetters(lettersArray);


      if (intervalId) {
        clearInterval(intervalId);
      }

      const newIntervalId = setInterval(() => {
        setDisplayText((prevText) => {
          const nextIndex = prevText.length + 1;
          return responseText.slice(0, nextIndex);
        });
      }, 100);

      setIntervalId(newIntervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [client]);
  return (
    <>
    <div className='bg'>
    <Container>
    <Row className='justify-content-center'>
    <Col lg={6}>
        
            <h1 style={{textAlign:"center", marginTop:"50px", marginBottom:"30px"}}>AI HealthCare</h1>
        </Col>
    </Row>
    <Row className='justify-content-center'> 
        <Col lg={6}>
            <p className='centered' id='pp' style={{textAlign:"center", marginTop:"50px", marginBottom:"30px"}}>{displayText}</p>
        </Col>
        <br/>
    </Row>
    <Row className='justify-content-center'>
    <Col lg={6}>
        <Link to={'/'}>
        <Button  style={{justifyContent:"center"}} variant="outline-secondary">Back</Button>
    
        </Link>
        </Col>
    </Row>
    </Container>
    </div>
    </>
  )
}

export default Ilness;
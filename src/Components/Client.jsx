import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import '../Assets/Ilness.css'


const Client_Form = ({client,setClient}) => {

  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  useEffect(() => {
    console.log(client);
  }, [client]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      navigate('/illness');
    }

    setValidated(true);
  };

  const handleChange=(event)=>{
    const { name, value } = event.target;
  setClient((prevClient) => ({
    ...prevClient,
    [name]: value,
  }));
  console.log(client);

  }

  return (
    <>
    <div className='bg'>
     <Container>
      <Row className="justify-content-center ">
        <Col lg={3}>
          <h1 style={{ marginBottom: '20px' }} >AI HealthCare</h1>
          </Col>
      </Row>
    <Row className="justify-content-center">
        <Col lg={6}>
      
         <Form noValidate validated={validated} onSubmit={handleSubmit} className="justify-content-center" >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Eg: Nawin" required name='name' onChange={(event)=>handleChange(event)} />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Eg: 19" required  name='age' onChange={(event)=>handleChange(event)}/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Please choose age for presice diagnosis.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Sex</Form.Label>
        <Form.Select aria-label="Default select example" name='sex' onChange={(event)=>handleChange(event)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Body Temperature in terms of Fahrenhit</Form.Label>
        <Form.Control type="number" placeholder="Eg: 100.24" required name='temperature' onChange={(event)=>handleChange(event)} />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Please choose temperature for presice diagnosis.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Symtoms</Form.Label>
        <Form.Select aria-label="Default select example" name='symtoms' onChange={(event)=>handleChange(event)}>
          <option value="Fever">Fever</option>
          <option value="Headache">Headache</option>
          <option value="Stomach Pain">Stomach Pain</option>
          <option value="Sore Throat">Sore Throat</option>
          <option value="Vomiting">Vomiting</option>
          <option value="Constipation">Constipation</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Eg: 17B, CTO Colony, Near Meenkashi Amman Temple, Madurai" required name='address' onChange={(event)=>handleChange(event)}/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Please enter your address.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          />
      </Form.Group>

        <Button type="submit">Submit form</Button>
     
    </Form>
    </Col>
      </Row>
    </Container>
    </div>

    </>
  )
}

export default Client_Form
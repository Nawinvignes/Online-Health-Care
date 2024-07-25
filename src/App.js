import { Routes,Route } from 'react-router-dom';
import { Signin } from './Components/Signin';
import { Signup } from './Components/Signup';
import "bootstrap/dist/css/bootstrap.min.css"
import ResponsiveAppBar, { Home } from './Components/Home';
// import { Home } from './Components/Home';
import Client_Form from './Components/Client.jsx'
import './Assets/Home.css'
import { HomeAfterSignin } from './Components/HomeAfterSignin.js';
import { useState } from 'react';
import Ilness from './Components/Diagnosis.jsx'

function App() {
  const[client,setClient] = useState({name:"",age:0,temperature:0,sex:"male",symtoms:"fever",address:""});

  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<HomeAfterSignin/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/client' element={<Client_Form client={client} setClient={setClient}/>}/>
        <Route  path='/illness' element={<Ilness client={client}/>}/>
    </Routes>
    </div>
  );
}

export default App;
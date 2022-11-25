  import { formToJSON } from 'axios'
  import axios from "axios";
  import React from 'react'
  import "./Login_code.css"  
  import "./homepage.css"
  import {useState} from 'react';
  import { useNavigate } from "react-router-dom"
  import {useRef} from 'react';
  


  function Login_code() {

    const history = useNavigate();
    
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const email = useRef(null);
    const password = useRef(null);
    const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);

    const handleSubmit = event => {
      console.log('handleSubmit ran');
      event.preventDefault(); 
      // console.log('email ', email);
      // console.log('pass ', password);
      console.log('first', email.current.value);
    console.log('last', password.current.value);
    if (password.current.value == null || password.current.value == null ){
      return
    }
      // var axios = require('axios');
    
// var data = JSON.stringify({
//   "email": "squareboat@gmail.com",
//   "password": "squareboat"
// });
var url = 'https://jobs-api.squareboat.info/api/v1/auth/login';
// var config = {
//   method: 'post',
//   url: 'https://jobs-api.squareboat.info/api/v1/auth/login',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

axios.post(url,{
  "email": email.current.value,
  "password": password.current.value
})
.then(function (response) {
  setJwt(response.data.data.token);
  localStorage.setItem('token', response.data.data.token);
  // localStorage.setItem('email',)
  console.log(response);
  history(`/jobposts`);

})
.catch(function (error) {
  console.log(error);
});

    };

    return (
      
      <>
      
      <div className='blueTile'>
      <div >
      <form className='loginform' onSubmit={handleSubmit}>
        <div className="form-inner">
  <h2 className="logintextEle">
    login
  </h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className="form-group1">
    <label className='inputemailtxt' htmlFor="email">Email Address:</label>
    <input className='inputemail' type="email"  ref={email}/>
  </div>



  <div className="form-group1">
    <label className='inputemailtxt' htmlFor="Password">Password:</label>
    <input className='inputemail' type="Password"  ref={password}/>
  </div>

  <div className="form-group1">
  <button className='inputbutton'  type="submit">Login</button>
  </div>


        </div>
        </form> 

      </div>
      </div>
      </>

    )
  }

  export default Login_code;
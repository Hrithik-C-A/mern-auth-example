import axios from 'axios';
import React,{useState} from 'react'
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(false)

  const handleLogin = (e)=>{
    e.preventDefault()
    const configuration = {
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
    .then((result)=>{
      setLogin(true)
    })
    .catch((error) => {
      error = new Error();
    })
  }
  return (
    <>
         <h2>Login</h2>
      <Form>
        {/* email */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit" onClick={handleLogin} >
          Login
        </Button>
      </Form>
      {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
    </>
  )
}

export default Login
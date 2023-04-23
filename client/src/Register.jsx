import React,{useState} from 'react'
import { Form, Button } from "react-bootstrap";
import axios from 'axios'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(false)

  const handleSubmit = (e)=>{
        e.preventDefault()
        const configuration = {
          method:'post',
          url: 'http://localhost:3000/register',
          data:{
            email,
            password
          }
        }
        axios(configuration)
        .then((result)=>{
          setRegister(true)
        })
        .catch((error) => {
          error = new Error();
        })
  }
  return (
    <>
         <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
      {register ? (<p className='text-success'>User Registered Succesfully</p>) : (<p className='text-danger'>User Not Registered </p>)}
    </>
  )
}

export default Register
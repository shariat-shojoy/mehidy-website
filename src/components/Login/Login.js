import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Login.css"


const Login = () => {
    return (
        <div>
               
            <Header></Header>
            <div className='container form'>
                <div className='head'>
                  {/* login tittle */}
                    <h1>please login</h1>
                </div>
                {/* login form  */}
            <Form className='input'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Link to="/home">
  <Button variant="primary" type="submit">
    Submit
  </Button> 
  </Link>
</Form>
            </div>
            <Footer></Footer>
        </div>
       
    );
};

export default Login;
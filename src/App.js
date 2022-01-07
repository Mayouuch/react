import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button ,Alert,Breadcrumb,Card, Form, FormGroup } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <form>
          <FormGroup controlId='fromEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder='Example@gmail.com'/>
            <Form.Text className="text-muted">
              We'll never share you email address, trust us!
            </Form.Text>
          </FormGroup>
          <Form.Group controlId='fromPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder='Password'/>
            </Form.Group>
            <button variant="secondary" type='submit'> Login </button>
        </form>
        <Card className='mb-3' style={{ color: "#000", marginBottom:15 }}>
          <Card.Img src='https://picsum.photos/200/50'/>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards
            </Card.Text>
            <button variant="primary"> Read More</button>
          </Card.Body>
        </Card>
        <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='success'>This is a button</Alert>
        <button>Test Button</button>
      </header>
    </div>
  );
}

export default App;

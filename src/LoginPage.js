import React, { Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class LoginPage extends Component {

  state = {
    credentials: {username: '', password: ''}
  }

  login = event => {
    fetch('http://localhost:8005/api/v1/auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
        data => {
            console.log(data.token)
        }
    )
    .catch( error => console.error(error))
  }


  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  render() {
    return (
      <div>
        <h1>Login user form</h1>
        <hr className='mb-5'/>
        <Form>
        <FormGroup row>
          <Label className='col-sm-1'> Username: </Label>
          <Col sm={3}>
            <Input type="text" name="username" 
            value={this.state.credentials.username}
            onChange={this.inputChanged}/>
          </Col>
        </FormGroup>
        <br/>

        <FormGroup row>
          <Label className='col-sm-1'> Password: </Label>
          <Col sm={3}>
            <Input className='col-sm-3' type="password" name="password"
            value={this.state.credentials.password}
            onChange={this.inputChanged}/>
           </Col>
        </FormGroup>

        <br/>
        <Button onClick={this.login}>Login</Button>
      
        </Form>
      </div>


    );
  }
}

export default LoginPage;
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';


const LoginPage = () => {

    const [username, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [success, setSuccess] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        fetch('http://localhost:8005/api/v1/auth/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
        .then( data => data.json())
        .then(
            data => {
                console.log(data.token)
            }
        )
        .catch(( error => console.error(error)))
        setUser('');
        setPwd('');
        setSuccess(true);
    }


    return (
        <>
            {success ? (
                <section>
                    <h1>Thanks for logging in!</h1>
                    <br/>
                    <p>
                        <a href='/'>Go back to Home</a>
                    </p>
                </section>
            ) : (

        <div>
        <h1>Login user form</h1>
        <hr className='mb-5'/>
        <Form>
        <FormGroup row>
          <Label className='col-sm-1'> Username: </Label>
          <Col sm={3}>
            <Input 
                type="text" 
                name="username"
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={username}
                required
            />
          </Col>
        </FormGroup>
        <br/>

        <FormGroup row>
          <Label className='col-sm-1'> Password: </Label>
          <Col sm={3}>
          <Input 
                type="password" 
                name="password"
                onChange={(e) => setPwd(e.target.value)}
                value={password}
                required
            />
           </Col>
        </FormGroup>

        <br/>
        <Button onClick={login}>Login</Button>
      
        </Form>
      </div>
      )}
      </>
    )
}

export default LoginPage
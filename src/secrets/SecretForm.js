import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import PropTypes from 'prop-types';

function SecretForm({ isAdd, token }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [secretValue, setSecretValue] = useState("");

    const handleAddSubmit = (event) => {
        event.preventDefault();

        const newSecret = {
            'name': name,
            'description': description,
            'secret' : secretValue
        };

        fetch('https://api.demo.backupy.rm-softwares.at/api/v1/secrets/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(newSecret)
        })
        .then(response => {
            if (response.ok) {
                alert("Successfully added new Secret");
                return response.json();
            }
        })
        .catch( error => console.error(error))

    };

    const handleUpdateSubmit = () => {
        //TODO: Call backend (waiting on backend to implement Editing)
        alert("Implement API call to update this Secret");
    };

    return (
        <>
        <Container className='container my-5'>

            <Form onSubmit={isAdd ? handleAddSubmit : handleUpdateSubmit}>
                <FormGroup>
                    <Label className='col-sm-2'>
                        Name:
                    </Label>
                    <Input className='col-sm-10' type="text" onChange={(e) => setName(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label className='col-sm-2'>
                        Description:
                    </Label>
                    <Input className='col-sm-10' type="textarea" onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>

                <FormGroup className='form-group'>
                    <Label>
                        Secret Value:
                    </Label>
                    <Input className='col-sm-10' type="text" onChange={(e) => setSecretValue(e.target.value)} />
                </FormGroup>

                <Button type='submit'>Submit</Button>
            </Form>

        </Container>
        </>
    );
}

SecretForm.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  token: PropTypes.string
}

export default SecretForm;

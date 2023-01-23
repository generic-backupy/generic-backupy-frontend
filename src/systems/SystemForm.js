import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import PropTypes from 'prop-types';

function SystemForm({ isAdd, token }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [host, setHost] = useState("");
    const [info, setInfo] = useState("");

    const handleAddSubmit = (event) => {
        event.preventDefault();

        const newSystem = {
            'name': name,
            'description': description,
            'host': host,
            'additional_information': info,
            'category': null
        };

        fetch('http://localhost:8005/api/v1/systems/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(newSystem)
        })
        .then(response => {
            if (response.ok) {
                alert("Successfully added new System");
                return response.json();
            }
        })
        .catch( error => console.error(error))

    };

    const handleUpdateSubmit = () => {
        //TODO: Call backend (waiting on backend to implement Editing)
        alert("Implement API call to update this System");
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
                    Host:
                </Label>
                <Input className='col-sm-10' type="text" onChange={(e) => setHost(e.target.value)} />
            </FormGroup>
            <FormGroup className='form-group'>
                <Label>
                    Additional Information:
                </Label>
                <Input className='col-sm-10' type="textarea" onChange={(e) => setInfo(e.target.value)} />
            </FormGroup>
            <Button type='submit'>Submit</Button>
            </Form>

        </Container>
        </>
    );
}

SystemForm.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  token: PropTypes.string
}

export default SystemForm;

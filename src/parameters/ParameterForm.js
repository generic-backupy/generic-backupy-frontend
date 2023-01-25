import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import PropTypes from 'prop-types';

function ParameterForm({ isAdd, token }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [paramValues, setParamValues] = useState("");

    const handleUpdateSubmit = () => {
        //TODO: Call backend (waiting on backend to implement Editing)
        alert("Implement API call to update this Parameter");
    };

    const handleAddSubmit = (event) => {
        event.preventDefault();

        let parsedParameter;
        try {
            parsedParameter = JSON.parse(paramValues);
        } catch (error) {
            alert("The parameter is not formatted correctly.")
        }

        const newParameter = {
            'name': name,
            'description': description,
            'parameter': parsedParameter,
        };

        fetch('https://api.demo.backupy.rm-softwares.at/api/v1/parameters/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(newParameter)
        })
        .then(response => {
            if (response.ok) {
                alert("Successfully added new Parameter");
                return response.json();
            }
        })
        .catch( error => console.error(error))

    };

    return (
        <>
        <Container className='container my-5'>

            <Form onSubmit={isAdd ? handleAddSubmit : handleUpdateSubmit}>
                <FormGroup>
                    <Label className='col-sm-2'>
                        Parameter Name:
                    </Label>
                    <Input className='col-sm-10' type="text" onChange={(e) => setName(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label className='col-sm-2'>
                        Parameter Description:
                    </Label>
                    <Input className='col-sm-10' type="textarea" onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>

                <FormGroup className='form-group'>
                    <Label>
                        Parameter Values (in JSON format):
                    </Label>
                    <Input className='col-sm-10' type="text" onChange={(e) => setParamValues(e.target.value)} />
                </FormGroup>

                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
        </>
    );
}

ParameterForm.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  token: PropTypes.string
}

export default ParameterForm;

import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import PropTypes from 'prop-types';

function CategoriesForm({ isAdd, token }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [parentId, setParentId] = useState(""); // change how this is collected

    const handleAddSubmit = (event) => {
        event.preventDefault();

        const newCategory = {
            'name': name,
            'description': description,
            'parent': parentId,
        };

        fetch('http://localhost:8005/api/v1/categories/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(newCategory)
        })
        .then(response => {
            if (response.ok) {
                alert("Successfully added new Category");
                return response.json();
            }
        })
        .catch( error => console.error(error))

    };

    const handleUpdateSubmit = () => {
        //TODO: Call backend (waiting on backend to implement Editing)
        alert("Implement API call to update this Category");
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
                        Parent Category:
                    </Label>
                    <Input className='col-sm-10' type="text" onChange={(e) => setParentId(e.target.value)} />
                </FormGroup>

                <Button type='submit'>Submit</Button>
            </Form>

        </Container>
        </>
    );
}

CategoriesForm.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  token: PropTypes.string
}

export default CategoriesForm;

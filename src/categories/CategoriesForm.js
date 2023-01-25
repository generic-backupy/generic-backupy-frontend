import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import SelectFromList from "../components/SelectFromList"

function CategoriesForm({ isAdd, token }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [chosenParentId, setChosenParentId] = useState("1");

    const [parentSelect, setParentSelect] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8005/api/v1/categories/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => response.json())
        .then(json => {setParentSelect(<SelectFromList itemLabel="Select"
            items={json.results}
            selectedValueId={chosenParentId}
            setSelectedValueId={setChosenParentId}/>);
        })
        .catch(error => console.error(error));
    }, [token, chosenParentId]);

    const handleUpdateSubmit = () => {
        //TODO: Call backend (waiting on backend to implement Editing)
        alert("Implement API call to update this Category");
    };

    const handleAddSubmit = (event) => {
        event.preventDefault();

        const newCategory = {
            'name': name,
            'description': description,
            'parent': chosenParentId,
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

    return (
        <>
        <Container className='container my-5'>

            <Form onSubmit={isAdd ? handleAddSubmit : handleUpdateSubmit}>
                <FormGroup>
                    <Label className='col-sm-2'>Category Name:</Label>
                    <Input className='col-sm-10' type="text" onChange={(e) => setName(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label className='col-sm-2'>Description:</Label>
                    <Input className='col-sm-10' type="textarea" onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>

                <FormGroup>{parentSelect}</FormGroup>

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

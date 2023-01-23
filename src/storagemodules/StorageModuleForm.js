import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import PropTypes from 'prop-types';


function StorageModuleForm({ isAdd, token }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");

    const handleAddSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file_uploaded", file);
        formData.append("name", name);
        formData.append("description", description);

        fetch('http://localhost:8005/api/v1/storage-modules/', { //TODO: test after backend fixes this
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token ' + token
            },
            body: formData
        })
        .then(response => {
            console.log(response)
            if (response.ok) {
                alert("Successfully added new Storage Module");
                return response.json();
            }
        })
        .then(json => console.log(json))
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
                    File to upload:
                </Label>
                <Input className='col-sm-10' type="file" onChange={(e) => setFile(e.target.files[0])} />
            </FormGroup>

            <Button type='submit'>Submit</Button>
            </Form>

        </Container>
        </>
    );
}

StorageModuleForm.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  token: PropTypes.string
}

export default StorageModuleForm;

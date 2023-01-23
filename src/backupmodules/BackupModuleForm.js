import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import PropTypes from 'prop-types';

function BackupModuleForm({ isAdd, token }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [fileSystemPath, setFileSystemPath] = useState("");

    const handleUpdateSubmit = () => {
        //TODO: Call backend (waiting on backend to implement Editing)
        alert("Implement API call to update this System");
    };

    function handleAddSubmit(event) {
        event.preventDefault();

        const newSystem = {
            'name': name,
            'description': description,
            'file_system_path': fileSystemPath,
        };

        fetch('http://localhost:8005/api/v1/backup-modules/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(newSystem)
        })
        .then(response => {
            console.log(response)
            if (response.ok) {
                alert("Successfully added new Backup Modules");
                return response.json();
            }
        })
        .then(json => console.log(json))
        .catch( error => console.error(error))

    };

    function onNameChange(e) {setName(e.target.value)};
    function onDescriptionChange(e) {setDescription(e.target.value)};
    function onFileSystemPathChange(e) {setFileSystemPath(e.target.value)};

    return (
        <>
        <Container className='container my-5'>

            <Form onSubmit={isAdd ? handleAddSubmit : handleUpdateSubmit}>
                <FormGroup>
                    <Label className='col-sm-2'>
                        Name:
                    </Label>
                    <Input className='col-sm-10' type="text" onChange={onNameChange} />
                </FormGroup>

                <FormGroup>
                    <Label className='col-sm-2'>
                        Description:
                    </Label>
                    <Input className='col-sm-10' type="textarea" onChange={onDescriptionChange} />
                </FormGroup>

                <FormGroup className='form-group'>
                    <Label>
                        File System Path:
                    </Label>
                    <Input className='col-sm-10' type="text" onChange={onFileSystemPathChange} />
                </FormGroup>

                <Button type='submit'>Submit</Button>
            </Form>

        </Container>
        </>
    );
}

BackupModuleForm.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  token: PropTypes.string
}

export default BackupModuleForm;

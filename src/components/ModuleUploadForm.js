import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import PropTypes from 'prop-types';

function BackupModuleForm({ isAdd, token, apiPathSection }) {
    const [file, setFile] = useState("");

    const handleUpdateSubmit = () => {
        //TODO: Call backend (waiting on backend to implement Editing)
        alert("Implement API call to update this System");
    };

    function handleAddSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file_uploaded", file);

        fetch(`https://api.demo.backupy.rm-softwares.at/api/v1/${apiPathSection}/`, {
            method: 'POST',
            headers: {
                'Authorization': 'Token ' + token
            },
            body: formData
        })
        .then(response => {
            console.log(response)
            if (response.ok) {
                alert("Successfully added new Module");
                return response.json != null ? response.json() : null;
            }
        })
        .then(json => console.log(json))
        .catch( error => console.error(error))
    };

    function onFileChange(e) {setFile(e.target.files[0])};

    return (
        <>
        <Container className='container my-5'>

            <Form onSubmit={isAdd ? handleAddSubmit : handleUpdateSubmit}>
                <FormGroup className='form-group'>
                    <Label>
                        Module Zip File to Upload:
                    </Label>
                    <Input className='col-sm-10' type="file" onChange={onFileChange} />
                </FormGroup>

                <Button type='submit'>Submit</Button>
            </Form>

        </Container>
        </>
    );
}

BackupModuleForm.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  token: PropTypes.string,
  apiPathSection: PropTypes.string.isRequired
}

export default BackupModuleForm;

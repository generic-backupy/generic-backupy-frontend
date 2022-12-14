import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

// props expected contents
// function: handleSubmit

function SystemForm(props) {
    return (
        <>
        <Container className='container my-5'>

            <Form onSubmit={props.handleSubmit}>
            <FormGroup>
                <Label className='col-sm-2'>
                    Name: 
                </Label>
                <Input className='col-sm-10' type="text" />
            </FormGroup>
            <FormGroup>
                <Label col-sm-2>
                    Description:
                </Label>
                <Input className='col-sm-10' type="textarea" />
            </FormGroup>
            <FormGroup className='form-group'>
                <Label>
                    Host:
                    
                </Label>
                <Input className='col-sm-10' type="text" />
            </FormGroup>
            <Button type='submit'>Submit</Button>
            </Form>

        </Container>
        </>
    );
}

export default SystemForm;

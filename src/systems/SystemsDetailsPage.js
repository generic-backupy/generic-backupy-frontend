import React, {useState} from 'react';
import SystemForm from "./SystemForm";
import { Button, Container, Label } from 'reactstrap';
import PropTypes from 'prop-types';

function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function SystemsDetailsPage({ token }) {
    const [isEditing, setIsEditing] = useState(false);

    const systemId = getIdNumber();
    if (isNaN(systemId)) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    let system = {name: "a name", description: "a description", host: "a host", createdBy: "a createdby value"}; //TODO: get this from a backend API call

    const handleDeleteButton = () => {
        //TODO: call backend
        alert("Implement call to delete this System")
    }

    const displayDetails = () => {
        return <>
            <Container className='row my-3'>
            
            <Label>Description: {system.description}</Label>
            <Label>Host: {system.host}</Label>
            <Label>CreatedBy: {system.createdBy}</Label>
            <Button className='my-2' onClick={() => setIsEditing(true)}>Edit</Button>
            <Button  className='my-2' onClick={handleDeleteButton}>Delete</Button>
            </Container>
        </>;
    };

    const handleUpdateSubmitButton = () => {
        //TODO: Call backend
        alert("Implement API call to update this System");
    };

    const editingForm = () => {
        return <>
            <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
            <SystemForm handleSubmit={handleUpdateSubmitButton} />
        </>;
    };

    return (
        <>
            <h1>{system.name}</h1>

            {isEditing ? editingForm() : displayDetails()}

        </>
    );
};

SystemsDetailsPage.propTypes = {
  token: PropTypes.string.isRequired
}

export default SystemsDetailsPage;

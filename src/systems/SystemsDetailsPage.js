import React, {useState, useEffect} from 'react';
import SystemForm from "./SystemForm";
import { Button, Container, Label } from 'reactstrap';
import PropTypes from 'prop-types';

function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function SystemsDetailsPage({ token }) {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const systemId = getIdNumber();

    const onSuccess = (json) => {
        setItem(json)
        setIsLoading(false);
    };

    useEffect(() => {
        fetch('http://localhost:8005/api/v1/systems/' + systemId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            setIsInvalid(true);
        })
        .then(json => onSuccess(json))
        .catch(error => {
            console.error(error);
            setIsLoading(false);
        });
    }, [token, systemId]);

    if (isNaN(systemId) || isInvalid) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleDeleteButton = () => {
        //TODO: call backend
        alert("Implement call to delete this System")
    }

    const displayDetails = () => {
        return <>
            <Container className='row my-3'>
            
            <Label>Description: {item.description}</Label>
            <Label>Host: {item.host}</Label>
            <p>Additional Info: {item.additional_information}</p>
            <Button className='my-2' onClick={() => setIsEditing(true)}>Edit</Button>
            <Button className='my-2' onClick={handleDeleteButton}>Delete</Button>
            </Container>
        </>;
    };


    const editingForm = () => {
        return <>
            <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
            <SystemForm isAdd={false} token={token}/>
        </>;
    };

    return (
        <>
            <h1>{item.name}</h1>

            {isEditing ? editingForm() : displayDetails()}

        </>
    );
};

SystemsDetailsPage.propTypes = {
  token: PropTypes.string
}

export default SystemsDetailsPage;

import React, {useState, useEffect} from 'react';
import { Button, Container } from 'reactstrap';
import PropTypes from 'prop-types';

export function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function DetailsPage({ token, apiPathSection, displayDetails, formComponent }) {

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const currentModelId = getIdNumber();

    const onSuccess = (json) => {
        setItem(json);
        setIsLoading(false);
    };

    useEffect(() => {
        fetch(`http://localhost:8005/api/v1/${apiPathSection}/${currentModelId}`, {
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
    }, [token, currentModelId, apiPathSection]);

    if (isNaN(currentModelId) || isInvalid) {
        return <h1>Invalid Page</h1>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    function handleDeleteButton() {
        //TODO: call backend (waiting on backend to implement)
        alert("Implement API call to delete this System")
    }
    let canDelete = false; // Remove this when implementing Deleting
    let canEdit = false && (formComponent != null); // Remove this when implementing Editing

    const editingForm = () => {
        return <>
            <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
            {formComponent}
        </>;
    };

    function onEditClick() {setIsEditing(true);}

    return (
        <>
            <h1>{item.name}</h1>
            <Container className='row my-3'>
                {isEditing ? editingForm() : displayDetails(item)}
                {!isEditing && canEdit && <Button className='my-2' onClick={onEditClick}>Edit</Button>}
                {!isEditing && canDelete && <Button className='my-2' onClick={handleDeleteButton}>Delete</Button>}
            </Container>
        </>
    );

}

DetailsPage.propTypes = {
  token: PropTypes.string,
  apiPathSection: PropTypes.string.isRequired,
  displayDetails: PropTypes.func.isRequired,
  formComponent: PropTypes.object
}

export default DetailsPage;

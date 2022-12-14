import React, {useState} from 'react';
import StorageModuleForm from "./StorageModuleForm";
import { Button, Container, Label } from 'reactstrap';


function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function StorageModuleDetailsPage() {
    const [isEditing, setIsEditing] = useState(false);

    const storageModuleId = getIdNumber();
    if (isNaN(storageModuleId)) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    //TODO: get this from a backend API call
    let storageModule = {name: "a name", description: "a description", additionalInfo: "some additional info",
     createdBy: "a createdby value"};

    const handleDeleteButton = () => {
        //TODO: call backend
        alert("Implement API call to delete this System")
    }

    const displayDetails = () => {
        return <>

            <Container className='row my-3'>
            
            <Label>Description: {storageModule.description}</Label>
            <Label>Additional Info:: {storageModule.additionalInfo}</Label>
            <Label>CreatedBy: {storageModule.createdBy}</Label>
            <Button className='my-2' onClick={() => setIsEditing(true)}>Edit</Button>
            <Button  className='my-2' onClick={handleDeleteButton}>Delete</Button>
            </Container>
        </>;
    };

    const handleUpdateSubmitButton = () => {
        //TODO: Call backend
        alert("Implement API call to update this Storage Module");
    };

    const editingForm = () => {
        return <>
            <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
            <StorageModuleForm handleSubmit={handleUpdateSubmitButton} />
        </>;
    };

    return (
        <>
            <h1>{storageModule.name}</h1>

            {isEditing ? editingForm() : displayDetails()}

        </>
    );
};

export default StorageModuleDetailsPage;

import React, {useState} from 'react';
import BackupModuleForm from "./BackupModuleForm";
import { Button, Container } from 'reactstrap';

function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function BackupModuleDetailsPage() {
    const [isEditing, setIsEditing] = useState(false);

    const backupModuleId = getIdNumber();
    if (isNaN(backupModuleId)) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    //TODO: get this from a backend API call
    let backupModule = {name: "a name", description: "a description", additionalInfo: "some additional info",
     createdBy: "a createdby value"};

    const handleDeleteButton = () => {
        //TODO: call backend
        alert("Implement API call to delete this System")
    }


    const displayDetails = () => {
        return <>
            <Container>
            <p>Description: {backupModule.description}</p>
            <p>AdditionalInfo: {backupModule.additionalInfo}</p>
            <p>CreatedBy: {backupModule.createdBy}</p>

            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button onClick={handleDeleteButton}>Delete</Button>
            </Container>
        </>;
    };

    const handleUpdateSubmitButton = () => {
        //TODO: Call backend
        alert("Implement API call to update this Backup Module");
    };

    const editingForm = () => {
        return <>
            <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
            <BackupModuleForm handleSubmit={handleUpdateSubmitButton} />
        </>;
    };

    return (
        <>
            <h1>{backupModule.name}</h1>

            {isEditing ? editingForm() : displayDetails()}

        </>
    );
};

export default BackupModuleDetailsPage;

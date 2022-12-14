import React, {useState} from 'react';
import BackupJobForm from "./BackupJobForm";
import { Button, Container, Label } from 'reactstrap';

function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function BackupJobDetailsPage() {
    const [isEditing, setIsEditing] = useState(false);

    const backupJobId = getIdNumber();
    if (isNaN(backupJobId)) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    //TODO: get this from a backend API call
    let backupJob = {name: "a name", description: "a description", additionalInfo: "some additional info",
     createdBy: "a createdby value", system: "System 1", backupModule: "Backup Module 1",
     storageModules: ["Storage Module 1", "Storage Module 2"]};

    const handleDeleteButton = () => {
        //TODO: call backend
        alert("Implement API call to delete this System")
    }

    const handleCreateBackup = () => {
        //TODO: call backend
        alert("Implement API call to run the backup job");
    }

    const displayDetails = () => {
        return <>
        <Container>
            <Button onClick={handleCreateBackup}>Run this Backup Job</Button>
            <p>Description: {backupJob.description}</p>
            <p>AdditionalInfo: {backupJob.additionalInfo}</p>
            <p>CreatedBy: {backupJob.createdBy}</p>
            <p>{"System: " + backupJob.system}</p>
            <p>{"Backup Module: " + backupJob.backupModule}</p>
            <div>
                Storage Modules:
                <ul>
                    {backupJob.storageModules.map((item, i) =>
                        <li key={i}>{item}</li>
                    )}
                </ul>

            </div>

            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button onClick={handleDeleteButton}>Delete</Button>
            </Container>
        </>;
    };

    const handleUpdateSubmitButton = () => {
        //TODO: Call backend
        alert("Implement API call to update this Backup Job");
    };

    const editingForm = () => {
        return <>
            <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
            <BackupJobForm handleSubmit={handleUpdateSubmitButton} />
        </>;
    };

    return (
        <>
            <h1>{backupJob.name}</h1>

            {isEditing ? editingForm() : displayDetails()}

        </>
    );
};

export default BackupJobDetailsPage;

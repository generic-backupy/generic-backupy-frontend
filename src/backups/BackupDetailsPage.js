import React from 'react';
import { Button, Container, Label } from 'reactstrap';

function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function BackupsDetailsPage() {
    const backupId = getIdNumber();
    if (isNaN(backupId)) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    //TODO: get real data from a backend API call
    let backup = {name: "a name", description: "a description", host: "a host", createdBy: "a createdby value",
    path: "/backup/backup1.bk", backupJob: "Backup Job 1", backupModule: "Backup Module 1", storageModule: "Storage Module 1",
    backupExecution: "Backup Execution 1", storageExecution: "Storage Execution 1",};

    const handleDeleteButton = () => {
        //TODO: call backend
        alert("Implement call to delete this Backup")
    }

    const handleRestoreButton = () => {
        //TODO: call backend
        alert("Implement call to restore from this Backup")
    }

    const displayDetails = () => {
        return <>
            <Container className='row my-3'>
            
            <Label>Description: {backup.description}</Label>
            <Label>Host: {backup.host}</Label>
            <Label>CreatedBy: {backup.createdBy}</Label>
            <Label>{"Path: " + backup.path}</Label>
            <Label>{"Backup Job: " + backup.backupJob}</Label>
            <Label>{"Backup Module: " + backup.backupModule}</Label>
            <Label>{"Storage Module: " + backup.storageModule}</Label>
            <Label>{"Backup Execution: " + backup.backupExecution}</Label>
            <Label>{"Storage Execution: " + backup.storageExecution}</Label>

            <Button  className='my-2' onClick={handleDeleteButton}>Delete</Button>
            </Container>


        </>;
    };

    return (
        <>
            <h1>{backup.name}</h1>
            <button onClick={handleRestoreButton}>Restore from this Backup</button>
            {displayDetails()}
            

        </>
    );
};

export default BackupsDetailsPage;

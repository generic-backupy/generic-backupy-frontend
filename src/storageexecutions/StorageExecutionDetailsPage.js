import React from 'react';
import { Button, Container, Label } from 'reactstrap';

function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function StorageExecutionsDetailsPage() {
    const storageExecutionId = getIdNumber();
    if (isNaN(storageExecutionId)) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    //TODO: get real data from a backend API call
    let storageExecution = {name: "a name", createdBy: "a createdby value", state: "a state value",
    output: "output 1. lalala", logs: "[timestamp] blah \n[timestamp] balanfjjf \n[timestamp] balanfjjf5",
    errors: "[timestamp] anfjjf \n[timestamp] fowrio232", backupJob: "Backup Job 1", storageModule: "Storage Module 1",
    };

    const handleDeleteButton = () => {
        //TODO: call backend
        alert("Implement call to delete this Storage Execution")
    }

    const displayDetails = () => {
        return <>
            <Container className='row my-3'>

            <Label>CreatedBy: {storageExecution.createdBy}</Label>
            <Label>State: {storageExecution.state}</Label>
            <Label>Output:</Label> <textarea disabled>{storageExecution.output}</textarea>
            <Label>Logs:</Label> <textarea disabled>{storageExecution.logs}</textarea>
            <Label>Errors:</Label> <textarea disabled>{storageExecution.errors}</textarea>

            <Label>{"Backup Job: " + storageExecution.backupJob}</Label>
            <Label>{"Storage Module: " + storageExecution.storageModule}</Label>

            <Button  className='my-2' onClick={handleDeleteButton}>Delete</Button>
            </Container>


        </>;
    };

    return (
        <>
            <h1>{storageExecution.name}</h1>
            {displayDetails()}


        </>
    );
};

export default StorageExecutionsDetailsPage;

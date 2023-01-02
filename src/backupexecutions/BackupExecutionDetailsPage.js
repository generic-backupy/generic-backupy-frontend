import React from 'react';
import { Button, Container, Label } from 'reactstrap';

function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function BackupExecutionsDetailsPage() {
    const backupExecutionId = getIdNumber();
    if (isNaN(backupExecutionId)) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    //TODO: get real data from a backend API call
    let backupExecution = {name: "a name", createdBy: "a createdby value", state: "a state value",
    output: "output 1. lalala", logs: "[timestamp] blah \n[timestamp] balanfjjf \n[timestamp] balanfjjf5",
    errors: "[timestamp] anfjjf \n[timestamp] fowrio232", backupJob: "Backup Job 1", backupModule: "Backup Module 1",
    };

    const handleDeleteButton = () => {
        //TODO: call backend
        alert("Implement call to delete this Backup Execution")
    }

    const displayDetails = () => {
        return <>
            <Container className='row my-3'>

            <Label>CreatedBy: {backupExecution.createdBy}</Label>
            <Label>State: {backupExecution.state}</Label>
            <Label>Output:</Label> <textarea disabled>{backupExecution.output}</textarea>
            <Label>Logs:</Label> <textarea disabled>{backupExecution.logs}</textarea>
            <Label>Errors:</Label> <textarea disabled>{backupExecution.errors}</textarea>

            <Label>{"Backup Job: " + backupExecution.backupJob}</Label>
            <Label>{"Backup Module: " + backupExecution.backupModule}</Label>

            <Button  className='my-2' onClick={handleDeleteButton}>Delete</Button>
            </Container>


        </>;
    };

    return (
        <>
            <h1>{backupExecution.name}</h1>
            {displayDetails()}


        </>
    );
};

export default BackupExecutionsDetailsPage;

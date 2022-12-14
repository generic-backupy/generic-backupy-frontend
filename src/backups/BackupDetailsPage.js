import React from 'react';

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
            <div>{"Description: "+ backup.description}</div>
            <div>{"Host: " + backup.host}</div>
            <div>{"CreatedBy: " + backup.createdBy}</div>
            <div>{"Path: " + backup.path}</div>
            <div>{"Backup Job: " + backup.backupJob}</div>
            <div>{"Backup Module: " + backup.backupModule}</div>
            <div>{"Storage Module: " + backup.storageModule}</div>
            <div>{"Backup Execution: " + backup.backupExecution}</div>
            <div>{"Storage Execution: " + backup.storageExecution}</div>

            <button onClick={handleDeleteButton}>Delete</button>
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

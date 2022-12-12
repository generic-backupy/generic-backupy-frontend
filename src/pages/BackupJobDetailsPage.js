import React, {useState} from 'react';
import BackupJobForm from "../forms/BackupJobForm";

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
     createdBy: "a createdby value", system: "System 1", backupModule: "Backup Module 1" };

    const handleDeleteButton = () => {
        //TODO: call backend
        alert("Implement call to delete this System")
    }

    const displayDetails = () => {
        return <>
            <div>{"Description: "+ backupJob.description}</div>
            <div>{"Additional Info: " + backupJob.additionalInfo}</div>
            <div>{"CreatedBy: " + backupJob.createdBy}</div>
            <div>{"System: " + backupJob.system}</div>
            <div>{"Backup Module: " + backupJob.backupModule}</div>

            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDeleteButton}>Delete</button>
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

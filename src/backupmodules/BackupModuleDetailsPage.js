import React, {useState} from 'react';
import BackupModuleForm from "./BackupModuleForm";

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
            <div>{"Description: "+ backupModule.description}</div>
            <div>{"Additional Info: " + backupModule.additionalInfo}</div>
            <div>{"CreatedBy: " + backupModule.createdBy}</div>

            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDeleteButton}>Delete</button>
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

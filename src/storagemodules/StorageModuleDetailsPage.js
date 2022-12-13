import React, {useState} from 'react';
import StorageModuleForm from "./StorageModuleForm";

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
            <div>{"Description: "+ storageModule.description}</div>
            <div>{"Additional Info: " + storageModule.additionalInfo}</div>
            <div>{"CreatedBy: " + storageModule.createdBy}</div>

            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDeleteButton}>Delete</button>
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

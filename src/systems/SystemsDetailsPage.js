import React, {useState} from 'react';
import SystemForm from "./SystemForm";

function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function SystemsDetailsPage() {
    const [isEditing, setIsEditing] = useState(false);

    const systemId = getIdNumber();
    if (isNaN(systemId)) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    let system = {name: "a name", description: "a description", host: "a host", createdBy: "a createdby value"}; //TODO: get this from a backend API call

    const handleDeleteButton = () => {
        //TODO: call backend
        alert("Implement call to delete this System")
    }

    const displayDetails = () => {
        return <>
            <div>{"Description: "+ system.description}</div>
            <div>{"Host: " + system.host}</div>
            <div>{"CreatedBy: " + system.createdBy}</div>

            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDeleteButton}>Delete</button>
        </>;
    };

    const handleUpdateSubmitButton = () => {
        //TODO: Call backend
        alert("Implement API call to update this System");
    };

    const editingForm = () => {
        return <>
            <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
            <SystemForm handleSubmit={handleUpdateSubmitButton} />
        </>;
    };

    return (
        <>
            <h1>{system.name}</h1>

            {isEditing ? editingForm() : displayDetails()}

        </>
    );
};

export default SystemsDetailsPage;

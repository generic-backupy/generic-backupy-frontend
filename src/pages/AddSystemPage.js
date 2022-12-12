import React from 'react';
import SystemForm from "../forms/SystemForm";

function AddSystemPage() {
    const handleAddSubmit = () => {
        //TODO: Call backend
        alert("Implement API call to make a new System");
    };

    return (
        <>
            <h1>Add New System</h1>
            <SystemForm handleSubmit={handleAddSubmit} />
        </>
    );
};

export default AddSystemPage;

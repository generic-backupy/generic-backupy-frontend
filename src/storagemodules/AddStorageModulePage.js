import React from 'react';
import StorageModuleForm from "./StorageModuleForm";

function AddStorageModulePage() {

    const handleAddSubmit = () => {
        //TODO: Call backend
        alert("Implement API call to make a new Storage Module");
    };


    return (
        <>
            <h1>Add New Storage Module</h1>
            <StorageModuleForm handleSubmit={handleAddSubmit} />
        </>
    );
};

export default AddStorageModulePage;

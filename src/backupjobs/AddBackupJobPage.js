import React from 'react';
import BackupJobForm from "./BackupJobForm";

function AddBackupJobPage() {

    const handleAddSubmit = () => {
        //TODO: Call backend
        alert("Implement API call to make a new Backup Job");
    };


    return (
        <>
            <h1>Add New Backup Job</h1>
            <BackupJobForm handleSubmit={handleAddSubmit} />
        </>
    );
};

export default AddBackupJobPage;

import React from 'react';
import BackupModuleForm from "./BackupModuleForm";

function AddBackupModulePage() {

    const handleAddSubmit = () => {
        //TODO: Call backend
        alert("Implement API call to make a new Backup Module");
    };


    return (
        <>
            <h1>Add New Backup Module</h1>
            <BackupModuleForm handleSubmit={handleAddSubmit} />
        </>
    );
};

export default AddBackupModulePage;

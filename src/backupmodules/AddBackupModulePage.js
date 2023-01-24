import React from 'react';
import BackupModuleForm from "./BackupModuleForm";
import PropTypes from 'prop-types';

function AddBackupModulePage({ token }) {

    return (
        <>
            <h1>Add New Backup Module</h1>
            <BackupModuleForm isAdd={true} token={token} />
        </>
    );
};

AddBackupModulePage.propTypes = {
  token: PropTypes.string
}

export default AddBackupModulePage;

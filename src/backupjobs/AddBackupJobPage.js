import React from 'react';
import BackupJobForm from "./BackupJobForm";
import PropTypes from 'prop-types';

function AddBackupJobPage({ token }) {

    return (
        <>
            <h1>Add New Backup Job</h1>
            <BackupJobForm isAdd={true} token={token} />
        </>
    );
};

AddBackupJobPage.propTypes = {
  token: PropTypes.string
}

export default AddBackupJobPage;

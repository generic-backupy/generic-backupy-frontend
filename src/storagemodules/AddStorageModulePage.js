import React from 'react';
import StorageModuleForm from "./StorageModuleForm";
import PropTypes from 'prop-types';

function AddStorageModulePage({ token }) {

    return (
        <>
            <h1>Add New Storage Module</h1>
            <StorageModuleForm isAdd={true} token={token} />
        </>
    );
};

AddStorageModulePage.propTypes = {
  token: PropTypes.string
}

export default AddStorageModulePage;

import React from 'react';
import SystemForm from "./SystemForm";
import PropTypes from 'prop-types';

function AddSystemPage({token}) {
    return (
        <>
            <h1>Add New System</h1>
            <SystemForm isAdd={true} token={token} />
        </>
    );
};

AddSystemPage.propTypes = {
  token: PropTypes.string
}

export default AddSystemPage;

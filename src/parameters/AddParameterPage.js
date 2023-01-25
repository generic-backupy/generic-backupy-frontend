import React from 'react';
import ParameterForm from "./ParameterForm";
import PropTypes from 'prop-types';

function AddParameterPage({token}) {
    return (
        <>
            <h1>Add New Parameter</h1>
            <ParameterForm isAdd={true} token={token} />
        </>
    );
};

AddParameterPage.propTypes = {
  token: PropTypes.string
}

export default AddParameterPage;

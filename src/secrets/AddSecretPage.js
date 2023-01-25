import React from 'react';
import SecretForm from "./SecretForm";
import PropTypes from 'prop-types';

function AddSecretPage({token}) {
    return (
        <>
            <h1>Add New Secret</h1>
            <SecretForm isAdd={true} token={token} />
        </>
    );
};

AddSecretPage.propTypes = {
  token: PropTypes.string
}

export default AddSecretPage;

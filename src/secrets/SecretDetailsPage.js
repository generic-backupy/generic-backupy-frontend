import React from 'react';
import SecretForm from "./SecretForm";
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import DetailsPage from '../components/DetailsPage';

function SecretsDetailsPage({ token }) {

    function displayDetails(secret) {
        return <>
            <Label>Description: {secret.description}</Label>
            <Label>Secret: {secret.secret}</Label>
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"secrets"}
            displayDetails={displayDetails}
            formComponent={<SecretForm isAdd={false} token={token} />}
           />;
};

SecretsDetailsPage.propTypes = {
  token: PropTypes.string
}

export default SecretsDetailsPage;

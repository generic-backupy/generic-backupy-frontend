import React from 'react';
import SystemForm from "./SystemForm";
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import DetailsPage from '../components/DetailsPage';

function SystemsDetailsPage({ token }) {

    const displayDetails = (system) => {
        return <>
            <Label>Description: {system.description}</Label>
            <Label>Host: {system.host}</Label>
            <p>Additional Info: {system.additional_information}</p>
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"systems"}
            displayDetails={displayDetails}
            formComponent={<SystemForm isAdd={false} token={token} />}
           />;
};

SystemsDetailsPage.propTypes = {
  token: PropTypes.string
}

export default SystemsDetailsPage;

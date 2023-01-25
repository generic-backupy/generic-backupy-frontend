import React from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import DetailsPage from '../components/DetailsPage';
import ParameterForm from './ParameterForm'

function ParameterDetailsPage({ token }) {

    function displayDetails(parameter) {
        return <>
            <Label>Description: {parameter.description}</Label>
            <Label>Parameter Values: {JSON.stringify(parameter.parameter)}</Label>
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"parameters"}
            displayDetails={displayDetails}
            formComponent={<ParameterForm isAdd={false} token={token} />}
           />;
};

ParameterDetailsPage.propTypes = {
  token: PropTypes.string
}

export default ParameterDetailsPage;

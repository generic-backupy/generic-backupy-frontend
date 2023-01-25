import React from 'react';
import StorageModuleForm from "./StorageModuleForm";
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import DetailsPage from '../components/DetailsPage';

function StorageModuleDetailsPage({ token }) {

    function displayDetails(storageModule) {
        return <>
            <Label>Description: {storageModule.description == null ? "None" : storageModule.description}</Label>
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"storage-modules"}
            displayDetails={displayDetails}
            formComponent={<StorageModuleForm isAdd={false} token={token} />}
           />;
};


StorageModuleDetailsPage.propTypes = {
  token: PropTypes.string
}

export default StorageModuleDetailsPage;

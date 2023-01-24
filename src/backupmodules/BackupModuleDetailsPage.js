import React from 'react';
import BackupModuleForm from "./BackupModuleForm";
import { Label } from 'reactstrap';
import DetailsPage from '../components/DetailsPage';
import PropTypes from 'prop-types';

function BackupModuleDetailsPage({ token }) {


    function displayDetails(backupModule) {
        return <>
            <Label>Description: {backupModule.description}</Label>
            <Label>File System Path: {backupModule.file_system_path}</Label>
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"backup-modules"}
            displayDetails={displayDetails}
            formComponent={<BackupModuleForm isAdd={false} token={token} />}
           />;
};

BackupModuleDetailsPage.propTypes = {
  token: PropTypes.string
}

export default BackupModuleDetailsPage;

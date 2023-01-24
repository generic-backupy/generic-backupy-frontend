import React from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import DetailsPage from '../components/DetailsPage';
import { Link } from "react-router-dom";

function BackupExecutionsDetailsPage({ token }) {

    function displayDetails(backupExecution) {
        return <>
            <Label>State: {backupExecution.state}</Label>
            <Label>Ends at: {backupExecution.ends_at}</Label>
            <Label>Output:</Label> <textarea disabled>{backupExecution.output}</textarea>
            <Label>Logs:</Label> <textarea disabled>{backupExecution.logs}</textarea>
            <Label>Errors:</Label> <textarea disabled>{backupExecution.errors}</textarea>

            <Label>Backup Job: <Link to={`/systems/${backupExecution.backup_job}`}>{backupExecution.backup_job}</Link></Label>
            <Label>Backup Module: <Link to={`/systems/${backupExecution.backup_module}`}>{backupExecution.backup_module}</Link></Label>
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"backup-executions"}
            displayDetails={displayDetails}
           />;
};

BackupExecutionsDetailsPage.propTypes = {
  token: PropTypes.string
}

export default BackupExecutionsDetailsPage;

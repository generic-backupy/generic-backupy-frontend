import React from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import DetailsPage from '../components/DetailsPage';
import { Link } from "react-router-dom";

function StorageExecutionsDetailsPage({ token }) {

    function displayDetails(storageExecution) {
        return <>
            <Label>State: {storageExecution.state}</Label>
            <Label>Ends at: {storageExecution.ends_at}</Label>
            <Label>Output:</Label> <textarea disabled>{storageExecution.output}</textarea>
            <Label>Logs:</Label> <textarea disabled>{storageExecution.logs}</textarea>
            <Label>Errors:</Label> <textarea disabled>{storageExecution.errors}</textarea>

            <Label>Backup Job: <Link to={`/systems/${storageExecution.backup_job}`}>{storageExecution.backup_job}</Link></Label>
            <Label>Backup Module: <Link to={`/systems/${storageExecution.storage_module}`}>{storageExecution.storage_module}</Link></Label>
            {storageExecution && <Label>Involved Backup: <Link to={`/systems/${storageExecution.involved_backup}`}>{storageExecution.involved_backup}</Link></Label>}
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"storage-executions"}
            displayDetails={displayDetails}
           />;
};

StorageExecutionsDetailsPage.propTypes = {
  token: PropTypes.string
}

export default StorageExecutionsDetailsPage;

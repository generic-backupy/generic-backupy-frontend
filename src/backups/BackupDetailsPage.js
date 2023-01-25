import React from 'react';
import { Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import DetailsPage, { getIdNumber } from '../components/DetailsPage';
import { Link } from "react-router-dom";

function BackupsDetailsPage({ token }) {

    function handleRestoreButton() {
        fetch(`https://api.demo.backupy.rm-softwares.at/api/v1/backups/${getIdNumber()}/execute/restore/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => {
            console.log(response);
            if (response.ok) {
                alert("Successfully called backend");
            }
        })
        .then(data => console.log(data))
        .catch( error => console.error(error));
    }

    function displayDetails(backup) {
        return <>
            <Button className='my-2' onClick={handleRestoreButton}>Restore this Backup</Button>

            <Label>Description: {backup.description}</Label>
            <Label>{"Path: " + backup.path}</Label>

            <Label>Backup Job: <Link to={`/backup-jobs/${backup.backup_job}`}>{backup.backup_job}</Link></Label>

            <Label>Backup Module: <Link to={`/backup-modules/${backup.backup_module}`}>{backup.backup_module}</Link></Label>

            <Label>Storage Module: {backup.backup_job_storage_module == null ? "None" : <Link to={`/storage-modules/${backup.backup_job_storage_module}`}>{backup.backup_job_storage_module}</Link>}</Label>

            <Label>Backup Execution: <Link to={`/backup-executions/${backup.backup_execution}`}>{backup.backup_execution}</Link></Label>

            <Label>Storage Execution: <Link to={`/storage-executions/${backup.storage_execution}`}>{backup.storage_execution}</Link></Label>
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"backups"}
            displayDetails={displayDetails}
            formComponent={<> </>}
           />;
};

BackupsDetailsPage.propTypes = {
  token: PropTypes.string
}

export default BackupsDetailsPage;

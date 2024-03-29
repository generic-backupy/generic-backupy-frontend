import React from 'react';
import BackupJobForm from "./BackupJobForm";
import { Button, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import DetailsPage, { getIdNumber } from '../components/DetailsPage';


function BackupJobDetailsPage({ token }) {
    function handleCreateBackup() {
        fetch(`https://api.demo.backupy.rm-softwares.at/api/v1/backup-jobs/${getIdNumber()}/execute/backup/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => {
            console.log(response);
            if (response.ok) {
                alert("Successfully started new Backup");
                return response.json();
            }
            return response.body;
        })
        .then(data => console.log(data))
        .catch( error => console.error(error));
    };

    function displayDetails(backupJob) {
        return <>
            <Button className='my-2' onClick={handleCreateBackup}>Run this Backup Job</Button>

            <Label>Description: {backupJob.description}</Label>
            <Label>Additional Info: {backupJob.additional_information}</Label>
            <Label>System: <Link to={`/systems/${backupJob.system}`}>{backupJob.system}</Link></Label>
            <Label>Backup Module: <Link to={`/backup-modules/${backupJob.backup_module}`}>{backupJob.backup_module}</Link></Label>

            {(!backupJob.storage_modules || backupJob.storage_modules === undefined) }<Label>{"Storage Module: None"}</Label>
            {backupJob.storage_modules && <div>
                Storage Modules:
                <ul>
                    {backupJob.storage_modules.map((storageModule, i) => {
                        return <li>
                            <Label>{"Storage Module: "}</Label> <Link to={`/storage-modules/${storageModule}`}>{storageModule}</Link>
                        </li>
                    })}
                </ul>
            </div>}
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"backup-jobs"}
            displayDetails={displayDetails}
            formComponent={<BackupJobForm isAdd={false} token={token} />}
           />;
};

BackupJobDetailsPage.propTypes = {
  token: PropTypes.string
}

export default BackupJobDetailsPage;

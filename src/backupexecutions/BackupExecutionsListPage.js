import React from 'react';
import ListOfLinks from "../components/ListOfLinks";

function BackupExecutionsListPage() {


    let backupExecutionsList = []; //TODO: do a fetch call to the backend API to get the list of Backup Executions
    // this is dummy data that needs to be replaced with real data from the backend.
    backupExecutionsList.push({displayName: "Backup Execution 1", path: "/backup-executions/1"});
    backupExecutionsList.push({displayName: "Backup Execution 2", path: "/backup-executions/2"});

    return (
        <>
            <h1>Backup Executions List</h1>
            <ListOfLinks items={backupExecutionsList} />
        </>
    );
}

export default BackupExecutionsListPage;

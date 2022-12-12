import React from 'react';
import ListOfLinks from "../components/ListOfLinks";

function BackupsListPage() {


    let backupsList = []; //TODO: do a fetch call to the backend API to get the list of Backups
    // this is dummy data that needs to be replaced with real data from the backend.
    backupsList.push({displayName: "Backup 1", path: "/backups/1"});
    backupsList.push({displayName: "Backup 2", path: "/backups/2"});

    return (
        <>
            <h1>Backups List</h1>
            <ListOfLinks items={backupsList} />
        </>
    );
}

export default BackupsListPage;

import React from 'react';
import ListOfLinks from "../components/ListOfLinks";
import { Link } from "react-router-dom";

function BackupModulesListPage() {


    let BackupModulesList = []; //TODO: do a fetch call to the backend API to get the list of BackupModules
    // this is dummy data that needs to be replaced with real data from the backend.
    BackupModulesList.push({displayName: "Backup Module 1", path: "/backup-modules/1"});
    BackupModulesList.push({displayName: "Backup Module 2", path: "/backup-modules/2"});

    return (
        <>
            <h1>Backup Modules List</h1>
            <Link to={"/add-backup-modules"}>{"Add a new Backup Modules"}</Link>
            <ListOfLinks items={BackupModulesList} />
        </>
    );
}

export default BackupModulesListPage;

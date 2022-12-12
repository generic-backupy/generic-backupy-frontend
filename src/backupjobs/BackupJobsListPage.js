import React from 'react';
import ListOfLinks from "../components/ListOfLinks";
import { Link } from "react-router-dom";

function BackupJobsListPage() {


    let BackupJobsList = []; //TODO: do a fetch call to the backend API to get the list of BackupJobs
    // this is dummy data that needs to be replaced with real data from the backend.
    BackupJobsList.push({displayName: "Backup Job 1", path: "/backup-jobs/1"});
    BackupJobsList.push({displayName: "Backup Job 2", path: "/backup-jobs/2"});

    return (
        <>
            <h1>BackupJobs List</h1>
            <Link to={"/add-backup-jobs"}>{"Add a new Backup Job"}</Link>
            <ListOfLinks items={BackupJobsList} />
        </>
    );
}

export default BackupJobsListPage;

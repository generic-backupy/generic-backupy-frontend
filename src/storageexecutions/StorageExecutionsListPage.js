import React from 'react';
import ListOfLinks from "../components/ListOfLinks";

function StorageExecutionsListPage() {


    let storageExecutionsList = []; //TODO: do a fetch call to the backend API to get the list of Storage Executions
    // this is dummy data that needs to be replaced with real data from the backend.
    storageExecutionsList.push({displayName: "Storage Execution 1", path: "/storage-executions/1"});
    storageExecutionsList.push({displayName: "Storage Execution 2", path: "/storage-executions/2"});

    return (
        <>
            <h1>Storage Executions List</h1>
            <ListOfLinks items={storageExecutionsList} />
        </>
    );
}

export default StorageExecutionsListPage;

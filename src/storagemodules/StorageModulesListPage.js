import React from 'react';
import ListOfLinks from "../components/ListOfLinks";
import { Link } from "react-router-dom";

function StorageModulesListPage() {


    let StorageModulesList = []; //TODO: do a fetch call to the backend API to get the list of StorageModules
    // this is dummy data that needs to be replaced with real data from the backend.
    StorageModulesList.push({displayName: "Storage Module 1", path: "/storage-modules/1"});
    StorageModulesList.push({displayName: "Storage Module 2", path: "/storage-modules/2"});

    return (
        <>
            <h1>Storage Modules List</h1>
            <Link to={"/add-storage-modules"}>{"Add a new Storage Modules"}</Link>
            <ListOfLinks items={StorageModulesList} />
        </>
    );
}

export default StorageModulesListPage;

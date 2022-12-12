import React from 'react';
import ListOfLinks from "../components/ListOfLinks";
import { Link } from "react-router-dom";

function SystemsListPage() {


    let systemsList = []; //TODO: do a fetch call to the backend API to get the list of Systems
    // this is dummy data that needs to be replaced with real data from the backend.
    systemsList.push({displayName: "System1", path: "/systems/1"});
    systemsList.push({displayName: "System2", path: "/systems/2"});

    return (
        <>
            <h1>Systems List</h1>
            <Link to={"/add-system"}>{"Add a new System"}</Link>
            <ListOfLinks items={systemsList} />
        </>
    );
}

export default SystemsListPage;

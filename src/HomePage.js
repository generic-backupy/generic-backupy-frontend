import React from 'react';
import ListOfLinks from "./components/ListOfLinks";


function HomePage() {

    let listItems = [
        {displayName: "Systems", path: "/systems", icon: "fa-gear"},
        {displayName: "Backup Jobs", path: "/backup-jobs", icon: "fa-thin fa-rotate-left"},
        {displayName: "Backups", path: "/backups", icon: "fa-rotate-left"},
        {displayName: "Backup Modules", path: "/backup-modules", icon: "fa-rotate-left"}, 
        {displayName: "Storage Modules", path: "/storage-modules", icon: "fa-database"}, 
        {displayName: "Backup Executions", path: "/backup-executions", icon: "fa-rotate-left"},
        {displayName: "Storage Executions", path: "/storage-executions", icon: "fa-database"},
        {displayName: "Users", path: "/users", icon: "fa-user"},
        {displayName: "Secrets", path: "/secrets", icon: "fa-key"},
        {displayName: "Parameters", path: "/parameters", icon: "fa-sliders"},
        {displayName: "Categories", path: "/categories", icon: "fa-bars"},
    ];

    return (
        <>
            <h1>Admin Dashboard</h1>
       
            <ListOfLinks items={listItems} />

        </>
    );
};
export default HomePage;

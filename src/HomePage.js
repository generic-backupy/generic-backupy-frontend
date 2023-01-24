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
        {displayName: "Users", path: "/users"},
        {displayName: "Secrets", path: "/secrets"},
        {displayName: "Parameters", path: "/parameters"}, //TODO: make ParametersListPage
//        {displayName: "Categories", path: "/categories"}, //TODO: make CategoriesListPage
    ];

    return (
        <>
            <h1>Admin Dashboard</h1>
       
            <ListOfLinks items={listItems} />

        </>
    );
};

export default HomePage;

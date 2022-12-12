import React from 'react';
import ListOfLinks from "./components/ListOfLinks";

function HomePage() {
    let listItems = [
        {displayName: "Systems", path: "/systems"},
        {displayName: "Backup Jobs", path: "/backup-jobs"}, //TODO: make BackupJobsListPage
        {displayName: "Backups", path: "/backups"}, //TODO: make BackupsListPage
        {displayName: "Backup Modules", path: "/backup-modules"}, //TODO: make BackupModulesListPage
        {displayName: "Storage Modules", path: "/storage-modules"}, //TODO: make StorageModulesListPage
        {displayName: "Backup Executions", path: "/backup-executions"}, //TODO: make BackupExecutionsListPage
        {displayName: "Storage Executions", path: "/storage-executions"}, //TODO: make StorageExecutionsListPage
        {displayName: "Users", path: "/users"}, //TODO: make StorageExecutionsListPage
        {displayName: "Secrets", path: "/secrets"}, //TODO: make StorageExecutionsListPage
        {displayName: "Parameters", path: "/parameters"}, //TODO: make StorageExecutionsListPage
        {displayName: "Categories", path: "/categories"}, //TODO: make StorageExecutionsListPage
    ];

    return (
        <>
            <h1>Admin Dashboard</h1>
            <ListOfLinks items={listItems} />

        </>
    );
};

export default HomePage;

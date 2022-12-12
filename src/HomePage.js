import React from 'react';
import ListOfLinks from "./components/ListOfLinks";

function HomePage() {
    let listItems = [
        {displayName: "Systems", path: "/systems"},
        {displayName: "Backup Jobs", path: "/backup-jobs"},
        {displayName: "Backups", path: "/backups"}, //TODO: make BackupsListPage
        {displayName: "Backup Modules", path: "/backup-modules"}, //TODO: make BackupModulesListPage
        {displayName: "Storage Modules", path: "/storage-modules"}, //TODO: make StorageModulesListPage
        {displayName: "Backup Executions", path: "/backup-executions"}, //TODO: make BackupExecutionsListPage
        {displayName: "Storage Executions", path: "/storage-executions"}, //TODO: make StorageExecutionsListPage
        {displayName: "Users", path: "/users"}, //TODO: make UsersListPage
        {displayName: "Secrets", path: "/secrets"}, //TODO: make SecretsListPage
        {displayName: "Parameters", path: "/parameters"}, //TODO: make ParametersListPage
        {displayName: "Categories", path: "/categories"}, //TODO: make CategoriesListPage
    ];

    return (
        <>
            <h1>Admin Dashboard</h1>
            <ListOfLinks items={listItems} />

        </>
    );
};

export default HomePage;

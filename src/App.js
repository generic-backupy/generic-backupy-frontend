import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import useToken from "./hooks/useToken";

import Layout from './components/Layout';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import SystemsListPage from './systems/SystemsListPage';
import SystemDetailsPage from './systems/SystemsDetailsPage';
import AddSystemPage from './systems/AddSystemPage';
import BackupJobsListPage from './backupjobs/BackupJobsListPage'
import BackupJobDetailsPage from './backupjobs/BackupJobDetailsPage';
import AddBackupJobPage from './backupjobs/AddBackupJobPage';
import BackupsListPage from './backups/BackupsListPage'
import BackupDetailsPage from './backups/BackupDetailsPage'
import BackupModulesListPage from './backupmodules/BackupModulesListPage';
import BackupModuleDetailsPage from './backupmodules/BackupModuleDetailsPage';
import AddBackupModulePage from './backupmodules/AddBackupModulePage';
import StorageModulesListPage from './storagemodules/StorageModulesListPage';
import StorageModuleDetailsPage from './storagemodules/StorageModuleDetailsPage';
import AddStorageModulePage from './storagemodules/AddStorageModulePage';
import BackupExecutionsListPage from './backupexecutions/BackupExecutionsListPage';
import BackupExecutionDetailsPage from './backupexecutions/BackupExecutionDetailsPage';
import StorageExecutionsListPage from './storageexecutions/StorageExecutionsListPage';
import StorageExecutionDetailsPage from './storageexecutions/StorageExecutionDetailsPage';




function App() {
  const { token, setToken } = useToken();

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout token={token} setToken={setToken}/>} >
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage setToken={setToken} />} />
                    <Route path="systems" element={<SystemsListPage token={token} />} />
                    <Route path="systems/*" element={<SystemDetailsPage token={token} />} />
                    <Route path="add-systems" element={<AddSystemPage token={token} />} />
                    <Route path="backup-jobs" element={<BackupJobsListPage token={token} />} />
                    <Route path="backup-jobs/*" element={<BackupJobDetailsPage token={token} />} />
                    <Route path="add-backup-jobs" element={<AddBackupJobPage token={token} />} />
                    <Route path="backup-modules" element={<BackupModulesListPage token={token} />} />
                    <Route path="backup-modules/*" element={<BackupModuleDetailsPage token={token} />} />
                    <Route path="add-backup-modules" element={<AddBackupModulePage token={token} />} />
                    <Route path="backups" element={<BackupsListPage />} />
                    <Route path="backups/*" element={<BackupDetailsPage />} />
                    <Route path="storage-modules" element={<StorageModulesListPage token={token} />} />
                    <Route path="storage-modules/*" element={<StorageModuleDetailsPage token={token} />} />
                    <Route path="add-storage-modules" element={<AddStorageModulePage token={token} />} />
                    <Route path="backup-executions" element={<BackupExecutionsListPage />} />
                    <Route path="backup-executions/*" element={<BackupExecutionDetailsPage />} />
                    <Route path="storage-executions" element={<StorageExecutionsListPage />} />
                    <Route path="storage-executions/*" element={<StorageExecutionDetailsPage />} />


                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;

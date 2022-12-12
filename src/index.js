import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="systems" element={<SystemsListPage />} />
                    <Route path="systems/*" element={<SystemDetailsPage />} />
                    <Route path="add-system" element={<AddSystemPage />} />
                    <Route path="backup-jobs" element={<BackupJobsListPage />} />
                    <Route path="backup-jobs/*" element={<BackupJobDetailsPage />} />
                    <Route path="add-backup-jobs" element={<AddBackupJobPage />} />
                    <Route path="backups" element={<BackupsListPage />} />
                    <Route path="backups/*" element={<BackupDetailsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>


    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

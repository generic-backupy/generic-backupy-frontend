import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function BackupJobsListPage({ token }) {
    return <ListPage token={token} pathSection={"backup-jobs"} modelName={"Backup Job"} />;
}

BackupJobsListPage.propTypes = {
  token: PropTypes.string
}

export default BackupJobsListPage;

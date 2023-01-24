import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function BackupExecutionsListPage({token}) {
    return <ListPage token={token} pathSection={"backup-executions"} modelName={"Backup Execution"} disallowAdd={true}/>;
}

BackupExecutionsListPage.propTypes = {
  token: PropTypes.string
}

export default BackupExecutionsListPage;

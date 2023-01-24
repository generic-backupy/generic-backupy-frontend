import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function BackupModulesListPage({ token }) {
    return <ListPage token={token} pathSection={"backup-modules"} modelName={"Backup Module"} />;
}

BackupModulesListPage.propTypes = {
  token: PropTypes.string
}

export default BackupModulesListPage;

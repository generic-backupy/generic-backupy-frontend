import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function BackupsListPage({ token }) {
    return <ListPage token={token} pathSection={"backups"} modelName={"Backup"} disallowAdd={true} />;
}

BackupsListPage.propTypes = {
  token: PropTypes.string
}

export default BackupsListPage;

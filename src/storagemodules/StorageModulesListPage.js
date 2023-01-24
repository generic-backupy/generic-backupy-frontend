import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function StorageModulesListPage({ token }) {
    return <ListPage token={token} pathSection={"storage-modules"} modelName={"Storage Module"} />;
}

StorageModulesListPage.propTypes = {
  token: PropTypes.string
}

export default StorageModulesListPage;

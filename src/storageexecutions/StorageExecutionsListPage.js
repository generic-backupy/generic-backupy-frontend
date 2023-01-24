import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function StorageExecutionsListPage({token}) {
    return <ListPage token={token} pathSection={"storage-executions"} modelName={"Storage Execution"} disallowAdd={true}/>;
}

StorageExecutionsListPage.propTypes = {
  token: PropTypes.string
}

export default StorageExecutionsListPage;

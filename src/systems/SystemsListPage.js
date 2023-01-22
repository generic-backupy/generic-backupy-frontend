import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function SystemsListPage({ token }) {
    return <ListPage token={token} pathSection={"systems"} modelName={"System"} />;
}

SystemsListPage.propTypes = {
  token: PropTypes.string
}

export default SystemsListPage;

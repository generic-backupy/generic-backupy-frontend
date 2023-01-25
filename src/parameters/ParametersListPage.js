import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function ParametersListPage({ token }) {
    return <ListPage token={token} pathSection={"parameters"} modelName={"Parameter"} />;
}

ParametersListPage.propTypes = {
  token: PropTypes.string
}

export default ParametersListPage;

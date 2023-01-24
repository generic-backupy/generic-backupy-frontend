import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function SecretsListPage({ token }) {
    return <ListPage token={token} pathSection={"secrets"} modelName={"Secret"} />;
}

SecretsListPage.propTypes = {
  token: PropTypes.string
}

export default SecretsListPage;

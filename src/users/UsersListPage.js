import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function UsersListPage({ token }) {
    return <ListPage token={token} pathSection={"users"} modelName={"User"} />;
}

UsersListPage.propTypes = {
  token: PropTypes.string
}

export default UsersListPage;

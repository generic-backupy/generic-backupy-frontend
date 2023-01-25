import React from 'react';
import PropTypes from 'prop-types';
import ListPage from '../components/ListPage';

function CategoriesListPage({ token }) {
    return <ListPage token={token} pathSection={"categories"} modelName={"Category"} />;
}

CategoriesListPage.propTypes = {
  token: PropTypes.string
}

export default CategoriesListPage;

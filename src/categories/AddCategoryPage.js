import React from 'react';
import CategoriesForm from "./CategoriesForm";
import PropTypes from 'prop-types';

function AddCategoryPage({token}) {
    return (
        <>
            <h1>Add New Category</h1>
            <CategoriesForm isAdd={true} token={token} />
        </>
    );
};

AddCategoryPage.propTypes = {
  token: PropTypes.string
}

export default AddCategoryPage;

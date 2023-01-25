import React from 'react';
import CategoriesForm from "./CategoriesForm";
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import DetailsPage from '../components/DetailsPage';

function CategoriesDetailsPage({ token }) {

    function displayDetails(category) {
        return <>
            <Label>Description: {category.description}</Label>
            <Label>Parent Category: {category.parent ?
                category.parent :
                "None"
            }</Label>
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"categories"}
            displayDetails={displayDetails}
            formComponent={<CategoriesForm isAdd={false} token={token} />}
           />;
};

CategoriesDetailsPage.propTypes = {
  token: PropTypes.string
}

export default CategoriesDetailsPage;

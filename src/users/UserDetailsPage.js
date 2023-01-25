import React from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import DetailsPage from '../components/DetailsPage';

function UserDetailsPage({ token }) {

    function displayDetails(user) {
        return <>
            <Label>Username: {user.username}</Label>
            <Label>Email: {user.email}</Label>
            <Label>Date Joined: {user.date_joined}</Label>
            <Label>Email Verified: {user.email_verified ? 'True' : 'False'}</Label>
        </>;
    };

    return <DetailsPage
            token={token}
            apiPathSection={"users"}
            displayDetails={displayDetails}
           />;
};

UserDetailsPage.propTypes = {
  token: PropTypes.string
}

export default UserDetailsPage;

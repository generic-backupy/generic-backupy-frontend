import React, { useState, useEffect } from 'react';
import ListOfLinks from "../components/ListOfLinks";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function SystemsListPage({ token }) {
    const [items, setItems] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const onSuccess = (json) => {
        let temp = [];
        json.results.forEach((element) => {
            temp.push({displayName: element.name, path: `/systems/${element.id}`});
        });

        setItems(temp);
        setIsLoading(false);
    };

    useEffect(() => {
        fetch('http://localhost:8005/api/v1/systems/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => response.json())
        .then(json => onSuccess(json))
        .catch(error => {
            console.error(error);
            setIsLoading(false);
        });
    }, [token]);

    return (
        <>
            <h1>Systems List</h1>
            <hr/>
            <Link className='dark' to={"/add-system"}>{"Add a new System"}</Link>
            {isLoading ? <div>Loading...</div> : <ListOfLinks items={items} />}
        </>
    );
}

SystemsListPage.propTypes = {
  token: PropTypes.string
}

export default SystemsListPage;

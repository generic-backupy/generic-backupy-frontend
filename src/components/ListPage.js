import React, { useState, useEffect } from 'react';
import ListOfLinks from "../components/ListOfLinks";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function ListPage({ token , pathSection, modelName}) {
    const [items, setItems] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8005/api/v1/${pathSection}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => response.json())
        .then(json => {
            let temp = [];
            json.results.forEach((element) => {
                temp.push({displayName: element.name, path: `/${pathSection}/${element.id}`});
            });

            setItems(temp);
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error);
            setIsLoading(false);
        });
    }, [token, pathSection]);

    return (
        <>
            <h1>{modelName} List</h1>
            <hr/>
            <Link className='dark' to={`/add-${pathSection}`}>{`Add a new ${modelName}`}</Link>
            {isLoading ? <div>Loading...</div> : <ListOfLinks items={items} />}
        </>
    );
}

ListPage.propTypes = {
  token: PropTypes.string,
  pathSection: PropTypes.string.isRequired,
  modelName: PropTypes.string.isRequired
}

export default ListPage;

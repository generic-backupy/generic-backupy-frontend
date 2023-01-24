import React, { useState, useEffect } from 'react';
import ListOfLinks from "../components/ListOfLinks";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function ListPage({ token , pathSection, modelName, disallowAdd }) {
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
        .then(response => response.ok ? response.json() : null)
        .then(json => {
            if (json == null) {
                return;
            }

            let temp = [];
            json.results.forEach((element) => {temp.push({
                displayName: element.name ? element.name : `${pathSection}-${element.id}`,
                path: `/${pathSection}/${element.id}`
            }); });

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
            {!disallowAdd && <Link className='dark' to={`/add-${pathSection}`}>{`Add a new ${modelName}`}</Link>}
            {isLoading ? <div>Loading...</div> : <ListOfLinks items={items} />}
        </>
    );
}

ListPage.propTypes = {
  token: PropTypes.string,
  pathSection: PropTypes.string.isRequired,
  modelName: PropTypes.string.isRequired,
  disallowAdd: PropTypes.bool
}

export default ListPage;

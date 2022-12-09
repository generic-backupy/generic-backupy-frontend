import React from 'react';
import { Link } from "react-router-dom";

// props expected contents
// array of Objects: items (each object has string displayName and string path)

function ModelListPageBody(props) {
    const Rows = [];
    for (let i=0; i < props.items.length; i++) {
        Rows.push(
            <li key={i}>
                <Link to={"/" + props.items[i].path}>{props.items[i].displayName}</Link>
            </li>
        );
    }

    return (
        <>
            <ul>
                {props.items.map((item, i) =>
                    <li key={i}>
                        <Link to={item.path}>{item.displayName}</Link>
                    </li>
                )}
            </ul>
        </>
    );
}

export default ModelListPageBody;

import React from 'react';
import { Link } from "react-router-dom";

// props expected contents
// array of Objects: items (each object has string displayName and string path)

function ListOfLinks(props) {
    return (
        <>
            <ul class="listoflinks">
                {props.items.map((item, i) =>
                    <li key={i} class="link">
                            <Link to={item.path}>{item.displayName}</Link>
                    </li>
                
                )}
            </ul>
        </>
    );
}

export default ListOfLinks;

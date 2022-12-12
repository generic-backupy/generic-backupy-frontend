import React from 'react';

// props expected contents
// string: itemType
// array of Strings: items

function SelectFromList(props) {
    return (
        <>
             <label>
                 {props.itemType}:
                 <select>
                     {props.items.map((item) =>
                         <option>{item}</option>
                     )}
                 </select>
             </label>
       </>
    );
}

export default SelectFromList;

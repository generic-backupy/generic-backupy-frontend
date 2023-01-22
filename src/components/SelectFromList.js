import React from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';

function SelectFromList({ itemLabel, items, selectedValueId, setSelectedValueId }) {
    return (
        <>
             <Label>
                 {itemLabel}: <br/>
                 <select value={selectedValueId} onChange={(e) => setSelectedValueId(e.target.value)}>
                    <option disabled key={0}>Choose an option</option>
                     {items.map((item) =>
                         <option key={item.id} value={item.id}>{item.id} - {item.name}</option>
                     )}
                 </select>
             </Label>
       </>
    );
}

SelectFromList.propTypes = {
  itemLabel: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  selectedValueId: PropTypes.string.isRequired,
  setSelectedValueId: PropTypes.func.isRequired
}

export default SelectFromList;

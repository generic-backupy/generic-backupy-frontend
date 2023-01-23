import React from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';

function SelectFromList({ itemLabel, items, selectedValueId, setSelectedValueId, allowMultiple }) {
    function handleChange(e) {
        if (allowMultiple) {
            setSelectedValueId(Array.from(e.target.selectedOptions, option => option.value));
        } else {
            setSelectedValueId(e.target.value);
        }
    }

    return (
        <>
             <Label>
                 {itemLabel}: <br/>
                 <select multiple={allowMultiple} value={selectedValueId} onChange={handleChange}>
                    <option disabled key={0}>Choose an option</option>
                     {items.map((item) =>
                         <option key={Number(item.id)} value={item.id}>{item.id} - {item.name}</option>
                     )}
                 </select>
             </Label>
       </>
    );
}

SelectFromList.propTypes = {
  itemLabel: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  selectedValueId: PropTypes.node.isRequired,
  setSelectedValueId: PropTypes.func.isRequired,
  allowMultiple: PropTypes.bool
}

export default SelectFromList;

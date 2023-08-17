// src/components/Row.js
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeRow,
  toggleRow,
  updateValue,
} from '../store/actions';

const Row = ({ index, row }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleRow(index));
  };

  const handleRemove = () => {
    dispatch(removeRow(index));
  };

  const handleValueChange = (e) => {
    dispatch(updateValue(index, e.target.value));
  };

  return (
    <div className={`row ${!row.enabled ? 'disabled' : ''}`}>
      <button onClick={handleToggle}>{row.enabled ? '-' : '+'}</button>
      <input
        type="number"
        value={row.value}
        onChange={handleValueChange}
        disabled={!row.enabled}
      />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Row;

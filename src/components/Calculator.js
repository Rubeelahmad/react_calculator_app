// src/components/Calculator.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRow } from '../store/actions';
import Row from './Row';

const Calculator = () => {
  const rows = useSelector(state => state.rows);
  const dispatch = useDispatch();

  const handleAddRow = () => {
    dispatch(addRow());
  };

  const calculateTotal = () => {
    return rows.reduce((total, row) => {
      return row.enabled ? total + parseFloat(row.value) : total;
    }, 0);
  };

  return (
    <div className="calculator">
      {rows.map((row, index) => (
        <Row
          key={index}
          index={index}
          row={row}
        />
      ))}
      <button onClick={handleAddRow}>Add Row</button>
      <div className="result">Total: {calculateTotal()}</div>
    </div>
  );
};

export default Calculator;

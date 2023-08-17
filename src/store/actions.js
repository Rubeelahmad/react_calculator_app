// src/store/actions.js
export const ADD_ROW = 'ADD_ROW';
export const REMOVE_ROW = 'REMOVE_ROW';
export const TOGGLE_ROW = 'TOGGLE_ROW';
export const UPDATE_VALUE = 'UPDATE_VALUE';

export const addRow = () => ({ type: ADD_ROW });
export const removeRow = (index) => ({ type: REMOVE_ROW, payload: index });
export const toggleRow = (index) => ({ type: TOGGLE_ROW, payload: index });
export const updateValue = (index, value) => ({ type: UPDATE_VALUE, payload: { index, value } });

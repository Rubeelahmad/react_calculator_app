import { combineReducers } from 'redux';
import {
  ADD_ROW,
  REMOVE_ROW,
  TOGGLE_ROW,
  UPDATE_VALUE,
} from './actions';

const initialState = [];

const rowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      return [...state, { value: 0, enabled: true }];
    case REMOVE_ROW:
      return state.filter((_, index) => index !== action.payload);
    case TOGGLE_ROW:
      return state.map((row, index) =>
        index === action.payload ? { ...row, enabled: !row.enabled } : row
      );
    case UPDATE_VALUE:
      return state.map((row, index) =>
        index === action.payload.index ? { ...row, value: action.payload.value } : row
      );
    default:
      return state;
  }
};

export default combineReducers({
  rows: rowsReducer,
});

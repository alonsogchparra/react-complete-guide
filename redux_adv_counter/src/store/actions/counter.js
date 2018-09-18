import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
};
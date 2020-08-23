import {CHANGE_PERMANENT, ADD_PURCHASE, DELETE_FROM_PURCHASES} from '../type';

export const savePermanentItem = (name, value) => {
  return {
    type: CHANGE_PERMANENT,
    fieldName: name,
    value: value,
  };
};
export const addPurchase = (data) => {
  return {
    type: ADD_PURCHASE,
    payload: data,
  };
};
export const deleteFromPurchases = (data) => {
  
  return {
    type: DELETE_FROM_PURCHASES,
    payload: data,
  };
};

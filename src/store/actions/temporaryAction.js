import {ADD_PRODUCTS, CHANGE_TEMPORARY, UPDATE_PRODUCT} from '../type';
export function onChange(name, value) {
  return {
    type: CHANGE_TEMPORARY,
    fieldName: name,
    value: value,
  };
}
export const addProducts = (data) => {
  return {
    type: ADD_PRODUCTS,
    payload: data,
  };
};
export function updateProduct(data) {
  return {
    type: UPDATE_PRODUCT,
    data,
  };
}

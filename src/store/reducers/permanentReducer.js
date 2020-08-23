import {CHANGE_PERMANENT, ADD_PURCHASE, DELETE_FROM_PURCHASES} from '../type';

const initialState = {
  purchases: [],
};
const permanentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PERMANENT:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case ADD_PURCHASE:
      return {
        ...state,
        purchases: [...state.purchases, action.payload],
      };
 
    case DELETE_FROM_PURCHASES:
      var filtered = state.purchases.filter((e) => e.id !== action.payload.id);
      return {
        ...state,
        purchases: filtered,
      };
    default:
      return state;
  }
};
export default permanentReducer;

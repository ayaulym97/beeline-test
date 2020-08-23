import {ADD_PRODUCTS, CHANGE_TEMPORARY, UPDATE_PRODUCT} from '../type';
const initialState = {
  products: [],
  productDetail: {},
};
const temporaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case CHANGE_TEMPORARY:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case UPDATE_PRODUCT:
      const updatedProduct = state.products.map((value) => {
        if (value.id === state.productDetail.id) {
          return {...value, ...action.data};
        }
        return value;
      });

      return {
        ...state,
        products: updatedProduct,
      };

    default:
      return state;
  }
};
export default temporaryReducer;

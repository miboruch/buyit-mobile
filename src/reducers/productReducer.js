export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_SINGLE_SUCCESS = 'FETCH_SINGLE_SUCCESS';
export const FETCH_USER_PRODUCTS_SUCCESS = 'FETCH_USER_PRODUCTS_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const LOAD_STOP = 'LOAD_STOP';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const ADD_TO_PRODUCTS = 'ADD_TO_PRODUCTS';
export const REMOVE_FROM_PRODUCTS = 'REMOVE_FROM_PRODUCTS';
export const REMOVE_FAILURE = 'REMOVE_FAILURE';
export const RESERVE_PRODUCT = 'RESERVE_PRODUCT';
export const UNRESERVE_PRODUCT = 'UNRESERVE_PRODUCT';
export const SET_TOTAL_PRODUCTS_COUNTER = 'SET_TOTAL_PRODUCTS_COUNTER';

const initialState = {
  products: [],
  userProducts: [],
  totalProductsCounter: undefined,
  singleProduct: {},
  isLoading: true,
  error: null,
  removeError: null,
  category: null
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        error: null
      };
    case FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        singleProduct: action.payload,
        isLoading: false,
        error: null
      };
    case FETCH_USER_PRODUCTS_SUCCESS:
      return {
        ...state,
        userProducts: action.payload,
        isLoading: false
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case LOAD_STOP:
      return {
        ...state,
        isLoading: false
      };
    case REMOVE_FAILURE:
      return {
        ...state,
        removeError: action.payload.error
      };
    case CATEGORY_UPDATE:
      return {
        ...state,
        category: action.payload
      };
    case ADD_TO_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case REMOVE_FROM_PRODUCTS:
      return {
        ...state,
        products: [...state.products.filter((item) => item._id !== action.payload.id)]
      };
    case RESERVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.map((item) =>
            item._id === action.payload ? { ...item, reserved: true } : item
          )
        ]
      };
    case UNRESERVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.map((item) =>
            item._id === action.payload ? { ...item, reserved: false } : item
          )
        ]
      };
    case SET_TOTAL_PRODUCTS_COUNTER:
      return {
        ...state,
        totalProductsCounter: action.payload
      };
    default:
      return state;
  }
};

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RESET_CART = 'RESET_CART';
export const LOAD_CART_ITEMS = 'LOAD_CART_ITEMS';

const initialState = {
  cart: [],
  totalPrice: 0
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalPrice: Math.round((state.totalPrice + action.payload.price) * 100) / 100
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: [...state.cart.filter(item => item._id !== action.payload._id)],
        totalPrice: Math.round((state.totalPrice - action.payload.price) * 100) / 100
      };
    case RESET_CART:
      return {
        ...state,
        cart: [],
        totalPrice: 0
      };
    case LOAD_CART_ITEMS:
      return {
        ...state,
        cart: action.payload,
        totalPrice: action.payload.reduce((acc, item) => acc + item.price, 0)
      };
    default:
      return state;
  }
};

import {
  SEARCH_TOGGLE,
  CART_TOGGLE,
  FILTER_TOGGLE,
  FILTER_TOGGLE_FUNCTION,
  MENU_TOGGLE
} from '../reducers/sliderBoxesReducer';

export const searchToggle = () => {
  return {
    type: SEARCH_TOGGLE
  };
};

export const cartToggle = () => {
  return {
    type: CART_TOGGLE
  };
};

export const filterToggle = () => {
  return {
    type: FILTER_TOGGLE
  };
};

export const filterToggleFunction = bool => {
  return {
    type: FILTER_TOGGLE_FUNCTION,
    payload: bool
  };
};

export const menuToggle = () => {
  return {
    type: MENU_TOGGLE
  };
};

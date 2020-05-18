export const SEARCH_TOGGLE = 'SEARCH_TOGGLE';
export const CART_TOGGLE = 'CART_TOGGLE';
export const FILTER_TOGGLE = 'FILTER_TOGGLE';
export const FILTER_TOGGLE_FUNCTION = 'FILTER_TOGGLE_FUNCTION';
export const MENU_TOGGLE = 'MENU_TOGGLE';
export const MENU_TOGGLE_FUNCTION = 'MENU_TOGGLE_FUNCTION';

const initialState = {
  isSearchOpen: false,
  isCartOpen: false,
  isFilterOpen: false,
  isMenuOpen: false
};

export const sliderBoxesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TOGGLE:
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen
      };
    case CART_TOGGLE:
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };
    case FILTER_TOGGLE:
      return {
        ...state,
        isFilterOpen: !state.isFilterOpen
      };
    case FILTER_TOGGLE_FUNCTION:
      return {
        ...state,
        isFilterOpen: action.payload
      };
    case MENU_TOGGLE:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    case MENU_TOGGLE_FUNCTION:
      return {
        ...state,
        isMenuOpen: action.payload
      };
    default:
      return state;
  }
};

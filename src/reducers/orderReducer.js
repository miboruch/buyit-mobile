export const ORDER_START = 'ORDER_START';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_ERROR = 'ORDER_ERROR';
export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR';

const initialState = {
    isLoading: false,
    allUserOrders: [],
    fetchOrderError: null,
    orderSuccess: false,
    orderError: null
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_START:
            return {
                ...state,
                isLoading: true,
                orderError: null,
                orderSuccess: false
            };
        case ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orderSuccess: true,
                orderError: null
            };
        case ORDER_ERROR:
            return {
                ...state,
                isLoading: false,
                orderSuccess: false,
                orderError: action.payload
            };
        case FETCH_ORDERS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                fetchOrderError: null,
                allUserOrders: action.payload
            };
        case FETCH_ORDERS_ERROR:
            return {
                ...state,
                isLoading: false,
                allUserOrders: [],
                fetchOrderError: action.payload
            };
        default:
            return state;
    }
};

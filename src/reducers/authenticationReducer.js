export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const AUTH_REGISTER_FAILURE = 'AUTH_REGISTER_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

const initialState = {
  isLoggedIn: false,
  token: null,
  userID: null,
  loginError: null,
  registerError: null,
  userInfoError: null,
  isLoading: false,
  userInfo: null,
  updateError: null
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        isLoading: true,
        loginError: null,
        registerError: null,
        userInfo: null,
        updateError: null
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userID: action.payload.userID,
        isLoggedIn: true,
        isLoading: false,
        loginError: null,
        registerError: null
      };
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload.error,
        isLoggedIn: false,
        isLoading: false
      };
    case AUTH_REGISTER_FAILURE:
      return {
        ...state,
        registerError: action.payload.error,
        isLoggedIn: false,
        isLoading: false
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        loginError: null,
        registerError: null,
        token: null,
        userID: null,
        isLoggedIn: false,
        isLoading: false
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateError: null
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        updateError: action.payload
      };
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
        isLoading: false
      };
    case GET_USER_INFO_ERROR:
      return {
        ...state,
        userInfo: null,
        isLoading: false,
        userInfoError: action.payload
      };
    default:
      return state;
  }
};

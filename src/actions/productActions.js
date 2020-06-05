import axios from 'axios';
import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_SINGLE_SUCCESS,
    FETCH_USER_PRODUCTS_SUCCESS,
    FETCH_FAILURE,
    LOAD_STOP,
    CATEGORY_UPDATE,
    ADD_TO_PRODUCTS,
    REMOVE_FROM_PRODUCTS,
    REMOVE_FAILURE,
    RESERVE_PRODUCT,
    UNRESERVE_PRODUCT,
    SET_TOTAL_PRODUCTS_COUNTER
} from '../reducers/productReducer';
import {API_URL} from '../utils/helpers';
import {categories} from '../utils/helpers';
import {getUserInfo} from './authenticationActions';

const fetchStart = () => {
    return {
        type: FETCH_START
    };
};

const fetchSuccess = (products) => {
    return {
        type: FETCH_SUCCESS,
        payload: products
    };
};

const fetchSingleSuccess = (product) => {
    return {
        type: FETCH_SINGLE_SUCCESS,
        payload: product
    };
};

const fetchUserProductsSuccess = (data) => {
    return {
        type: FETCH_USER_PRODUCTS_SUCCESS,
        payload: data
    };
};

const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: {
            error: error
        }
    };
};

const loadStop = () => {
    return {
        type: LOAD_STOP
    };
};

const setProductTotalCounter = (totalCounter) => {
    return {
        type: SET_TOTAL_PRODUCTS_COUNTER,
        payload: totalCounter
    };
};

export const addToProducts = (product) => {
    return {
        type: ADD_TO_PRODUCTS,
        payload: product
    };
};

export const removeFromProducts = (productId) => {
    return {
        type: REMOVE_FROM_PRODUCTS,
        payload: {
            id: productId
        }
    };
};

export const reserveProduct = (productId) => {
    return {
        type: RESERVE_PRODUCT,
        payload: productId
    };
};

export const unreserveProduct = (productId) => {
    return {
        type: UNRESERVE_PRODUCT,
        payload: productId
    };
};

const removeFailure = (error) => {
    return {
        type: REMOVE_FAILURE,
        payload: {
            error: error
        }
    };
};

export const updateCategory = (category) => {
    return {
        type: CATEGORY_UPDATE,
        payload: category
    };
};

export const fetchAllUserProducts = (token) => async (dispatch) => {
    dispatch(fetchStart());

    try {
        const {data} = await axios.get(`${API_URL}/product/getUserProducts`, {
            headers: {'auth-token': token}
        });

        dispatch(fetchUserProductsSuccess(data));
    } catch (e) {
        dispatch(loadStop());
    }
};

export const fetchAllProducts = (category, page) => async (dispatch) => {
    dispatch(fetchStart());
    try {
        const [currentCategory] = categories.filter((item) => category.includes(item));

        if (!currentCategory) {
            return new Error('Wrong category provided');
        }
        const {data} = await axios.get(
            currentCategory === 'all'
                ? `${API_URL}/product/getAll?page=${page}`
                : `${API_URL}/product/getAllCategoryProducts/${category}?page=${page}`
        );

        dispatch(fetchSuccess(data.products));
        dispatch(setProductTotalCounter(data.productsLength));
    } catch (error) {
        dispatch(fetchFailure(error));
    }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
    dispatch(fetchStart());
    try {
        const {data} = await axios.get(`${API_URL}/product/getSpecificProduct/${id}`);

        dispatch(fetchSingleSuccess(data));
    } catch (error) {
        dispatch(fetchFailure(error));
    }
};

export const searchProductByQuery = (query) => async (dispatch) => {
    dispatch(fetchStart());
    try {
        const queryResult = query.split(' ').join('_');

        const {data} = await axios.get(`${API_URL}/product/search/${queryResult}`);
        dispatch(fetchSuccess(data));
    } catch (error) {
        dispatch(fetchFailure(error));
    }
};

export const removeProduct = (token, productID, navigation) => async (dispatch) => {
    try {
        await axios.post(
            `${API_URL}/product/removeProduct`,
            {id: productID},
            {
                headers: {'auth-token': token}
            }
        );
        dispatch(fetchAllUserProducts(token));
        navigation.navigate('Products');
    } catch (error) {
        dispatch(removeFailure(error));
    }
};

export const addProduct = (image, name, description, price, category, token) => async (
    dispatch
) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);

    dispatch(fetchStart());
    try {
        await axios.post(`${API_URL}/product/addProduct`, formData, {
            headers: {
                'auth-token': token,
                'Content-Type': 'multipart/form-data'
            }
        });

        dispatch(loadStop());
        dispatch(getUserInfo(token));
        dispatch(fetchAllUserProducts(token));
    } catch (error) {
        dispatch(fetchFailure(error));
    }
};

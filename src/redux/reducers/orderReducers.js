import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_GET_FAIL,
  ORDER_GET_REQUEST,
  ORDER_GET_SUCCESS,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_ALL_ORDER_FAIL,
  UPDATE_STATUS_REQUEST,
  UPDATE_STATUS_SUCCESS,
  UPDATE_STATUS_FAIL,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Get user orders
export const userOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_GET_REQUEST:
      return {
        loading: true,
        orders: [],
      };
    case ORDER_GET_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_GET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// GET ALL ORDERS => ADMIN
export const allOrderReducer = (state = { orderList: [] }, action) => {
  switch (action.type) {
    case GET_ALL_ORDER_REQUEST:
      return { loading: true, orderList: [] };
    case GET_ALL_ORDER_SUCCESS:
      return { loading: true, orderList: action.payload };
    case GET_ALL_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// GET ALL ORDERS => ADMIN
export const updateStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STATUS_REQUEST:
      return { loading: true };
    case UPDATE_STATUS_SUCCESS:
      return { loading: true, success: true };
    case UPDATE_STATUS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

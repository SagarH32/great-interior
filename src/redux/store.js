import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  allUserReducer,
  loginReducer,
  makeAdminReducer,
  registerReducer,
} from './reducers/userReducers';
import { reviewReducer } from './reducers/reviewReducers';
import {
  orderCreateReducer,
  userOrdersReducer,
  allOrderReducer,
  updateStatusReducer,
} from './reducers/orderReducers';
import {
  serviceDeleteReducer,
  createServiceReducer,
  getServiceReducer,
  singleServiceReducer,
  serviceUpdateReducer,
} from './reducers/serviceReducers';

const rootReducer = combineReducers({
  rootRegister: registerReducer,
  rootLogin: loginReducer,
  rootReview: reviewReducer,
  rootOrderCreate: orderCreateReducer,
  rootUserOrders: userOrdersReducer,
  getServices: getServiceReducer,
  getSingleService: singleServiceReducer,
  rootCreateService: createServiceReducer,
  rootAllOrder: allOrderReducer,
  rootUpdateStatus: updateStatusReducer,
  rootAllUsers: allUserReducer,
  rootAdminUser: makeAdminReducer,
  rootDeleteService: serviceDeleteReducer,
  rootUpdateService: serviceUpdateReducer,
});

const userFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  rootLogin: { userInfo: userFromStorage },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

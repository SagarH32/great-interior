import {
  REVIEW_SUBMIT_FAIL,
  REVIEW_SUBMIT_REQUEST,
  REVIEW_SUBMIT_SUCCESS,
} from '../constants/reviewConstants';

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_SUBMIT_REQUEST:
      return { loading: true };
    case REVIEW_SUBMIT_SUCCESS:
      return { loading: false, success: action.payload };
    case REVIEW_SUBMIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

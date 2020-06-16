// import {
//   DECREMENT_COUNTER,
//   INCREMENT_COUNTER,
// } from "../actions/aut";

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../actions/authActions";

// let initialState = {};

let initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log(action);
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        // user: action.creds.email,
      });
    case LOGIN_SUCCESS:
      console.log(action.payload);
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.payload,
      });
    case LOGIN_FAILURE:
      console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        // user: action.creds.email,
      });
    case LOGOUT_REQUEST:
      console.log(action);
      return Object.assign({}, state, {
        isFetching: true,
        // isAuthenticated: false,
        // user: action.creds.email,
      });
    case LOGOUT_SUCCESS:
      console.log(action.payload);
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        user: null,
      });
    case LOGOUT_FAILURE:
      console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        // isAuthenticated: true,
        // user: action.creds.email,
      });
    default:
      return { ...state };
  }
};

export default authReducer;

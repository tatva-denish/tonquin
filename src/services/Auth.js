import {Map} from 'immutable';
// import {get, post, put, del, patch} from '../utils/api';
import * as apiEndpoints from '../utils/apiConfig'; // you need to make
import * as configuration from '../utils/configuration'; // already made
import {NavigationActions} from 'react-navigation';
// import AppNavigator from "../modules/navigator/Navigator";

global.isInernetConnected = false;

//TO set API_ROOT varible
const API_ROOT = apiEndpoints.api;
configuration.setConfiguration('API_ROOT', API_ROOT);

const SET_LOADER = 'SET_LOADER';

const SESSION_LOGIN_SUCCESS = 'SESSION_LOGIN_SUCCESS';
const SESSION_LOGIN_FAIL = 'SESSION_LOGIN_FAIL';
const SESSION_LOGOUT_SUCCESS = 'SESSION_LOGOUT_SUCCESS';

const INVALIDE_LOGIN = 'INVALIDE_LOGIN';

const INTERNET_CONNECTION = 'INTERNET_CONNECTION';

export const setLoader = value => ({type: SET_LOADER, payload: value});

export const setInternetConnection = value => ({
  type: INTERNET_CONNECTION,
  payload: value
});

export const loginSuccess = value => ({
  type: SESSION_LOGIN_SUCCESS,
  payload: JSON.stringify({value})
});
export const loginFail = value => ({
  type: SESSION_LOGIN_FAIL,
  payload: value
});

export const invalideLogin = value => ({
  type: INVALIDE_LOGIN,
  payload: value
});
export const logoutSuccess = value => ({
  type: SESSION_LOGOUT_SUCCESS,
  payload: value
});

// Logout User
export const logoutAsync = () => {
  return async dispatch => {
    // await clearSnapshot();
    // dispatch(NavigationState.navReset());
    dispatch(logoutSuccess(true));
    dispatch(setLoader(false));
    // dispatch(resetSessionStateFromSnapshot());
    return true;
  };
};

export const resetTo = (props, route) => {
  return async dispatch => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({routeName: route})]
    });
    props.navigation.dispatch(actionToDispatch);
    dispatch(logoutAsync());
    dispatch(setLoader(false));
  };
};

export const handleFirstConnectivityChange = reachability => {
  global.isInernetConnected = reachability;
};

// Initial state
const initialState = Map({
  isNotLoggedIn: true,
  errorMsg: '',
  loading: false,
  isConnected: false,
  isWrongCredential: false

});

export default function AuthStateReducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_LOGIN_SUCCESS:
      return state.set('user', action.payload).set('isNotLoggedIn', false);
    case SESSION_LOGIN_FAIL:
      return state.set('errorMsg', action.payload).set('isNotLoggedIn', true);
    case SESSION_LOGOUT_SUCCESS:
      return initialState;
    case INVALIDE_LOGIN:
      return state.set('isWrongCredential', action.payload);
    case SET_LOADER:
      return state.set('loading', action.payload);
    case INTERNET_CONNECTION:
      return state.set('isConnected', action.payload);
    default:
      return state;
  }
}

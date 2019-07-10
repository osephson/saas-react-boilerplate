import {LOGIN_REQUEST, REGISTER_REQUEST} from "../constants";

const initialState = {
  data: null,

  loading: false,
  error: null,
  errorMessage: null,

  refreshToken: null,
  token: null,
};

export function auth(state = initialState, action) {
  switch (action.type) {
    /**
     * LOGIN_REQUEST
     */
    case LOGIN_REQUEST.SUCCESS:
      state = {
        ...state,
        ...action.payload,
        loading: false,
        error: false,
        errorMessage: null
      };
      return state;
    case LOGIN_REQUEST.FAILURE:
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false
      };
      return state;
    case LOGIN_REQUEST.REQUEST, LOGIN_REQUEST.TRIGGER:
      state = {
        ...state,
        error: false,
        loading: true
      };
      return state;

    /**
     * REGISTER_REQUEST
     */
    case REGISTER_REQUEST.SUCCESS:
      state = {
        ...state,
        ...action.payload,
        loading: false
      };
      return state;
    case REGISTER_REQUEST.FAILURE:
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false
      };
      return state;
    case REGISTER_REQUEST.REQUEST, REGISTER_REQUEST.TRIGGER:
      state = {
        ...state,
        error: false,
        loading: true
      };
      return state;

    /**
     * DEFAULT
     */
    default:
      return state;
  }
}

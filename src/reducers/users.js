import { Switch } from "react-router";
import {
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
  USERS_LIST_REQUEST,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from "../actions/types";

export const userReducer = (state = { users: [], loading: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_LIST_REQUEST:
      return {
        loading: true,
      };
    case USERS_LIST_SUCCESS:
      return {
        loading: false,
        users: payload,
      };
    case USERS_LIST_FAIL:
      return {
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DELETE_REQUEST:
      return { loading: true, ...state };
    case USER_DELETE_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case USER_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

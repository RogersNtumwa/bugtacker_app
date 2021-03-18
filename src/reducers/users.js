import { Switch } from "react-router";
import {
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
  USERS_LIST_REQUEST,
} from "../actions/types";

export const userReducer = (state = { users: [], loading: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case USERS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

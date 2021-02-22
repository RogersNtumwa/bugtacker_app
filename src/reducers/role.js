import {
  ROLES_LIST_FAIL,
  ROLES_LIST_REQUEST,
  ROLES_LIST_SUCCESS,
  ROLE_CREATE_REQUEST,
  ROLE_CREATE_SUCCESS,
  ROLE_CREATE_FAIL,
  ROLE_UPDATE_FAIL,
  ROLE_UPDATE_REQUEST,
  ROLE_UPDATE_RESET,
  ROLE_UPDATE_SUCCESS,
  ROLE_DELETE_FAIL,
  ROLE_DELETE_REQUEST,
  ROLE_DELETE_SUCCESS,
} from "../actions/types";

export const rolesListReducer = (state = { roles: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROLES_LIST_REQUEST:
      return { loading: true };

    case ROLES_LIST_SUCCESS:
      return {
        loadi: false,
        roles: payload,
      };

    case ROLES_LIST_FAIL:
      return {
        loadi: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const deleteRoleReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ROLE_DELETE_REQUEST:
      return { loading: true, ...state };
    case ROLE_DELETE_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case ROLE_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const createRoleReducer = (
  state = { success: false, role: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ROLE_CREATE_REQUEST:
      return { loading: true, ...state };
    case ROLE_CREATE_SUCCESS:
      return {
        success: true,
        loading: false,
        role: payload,
      };
    case ROLE_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const editRoleReducer = (state = { role: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ROLE_UPDATE_REQUEST:
      return { loading: true, ...state };
    case ROLE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        role: payload,
      };
    case ROLE_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case ROLE_UPDATE_RESET:
      return {
        role: {},
      };
    default:
      return state;
  }
};

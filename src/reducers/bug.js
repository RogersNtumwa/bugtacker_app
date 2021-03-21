import {
  BUGS_LIST_SUCCESS,
  BUGS_LIST_FAIL,
  BUG_DETAILS_FAIL,
  BUG_DETAILS_SUCCESS,
  BUG_DETAILS_REQUEST,
  BUG_DELETE_REQUEST,
  BUG_DELETE_SUCCESS,
  BUG_DELETE_FAIL,
  BUG_CREATE_SUCCESS,
  BUG_CREATE_FAIL,
  BUG_CREATE_REQUEST,
  BUG_UPDATE_REQUEST,
  BUG_UPDATE_SUCCESS,
  BUG_UPDATE_FAIL,
  BUG_UPDATE_RESET,
  BUG_MESSAGE_SUCCESS,
  BUG_MESSAGE_FAIL,
} from "../actions/types";
const initialState = {
  bugs: [],
  error: {},
  loading: true,
};

export const bugsList = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case BUGS_LIST_SUCCESS:
      return {
        ...state,
        bugs: payload,
        loading: false,
      };
    case BUGS_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const bugDetails = (state = { bug: {}, loading: true }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BUG_DETAILS_REQUEST:
      return { loading: true, ...state };
    case BUG_DETAILS_SUCCESS:
      return {
        bug: payload,
        loading: false,
      };
    case BUG_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const deleteBugReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case BUG_DELETE_REQUEST:
      return { loading: true, ...state };
    case BUG_DELETE_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case BUG_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const createBugReducer = (
  state = { success: false, bug: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case BUG_CREATE_REQUEST:
      return { loading: true, ...state };
    case BUG_CREATE_SUCCESS:
      return {
        success: true,
        loading: false,
        bug: payload,
      };
    case BUG_CREATE_FAIL:
      return {
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export const editBugReducer = (state = { bug: {}, success: false }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BUG_UPDATE_REQUEST:
      return { loading: true, ...state };
    case BUG_UPDATE_SUCCESS:
    case BUG_MESSAGE_SUCCESS:
      return {
        loading: false,
        success: true,
        bug: payload,
      };
    case BUG_UPDATE_FAIL:
    case BUG_MESSAGE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case BUG_UPDATE_RESET:
      return {
        bug: {},
      };
    default:
      return state;
  }
};

export const commentBugReducer = (state = { bug: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BUG_UPDATE_REQUEST:
      return { loading: true, ...state };
    case BUG_MESSAGE_SUCCESS:
      return {
        loading: false,
        success: true,
        bug: payload,
      };
    case BUG_MESSAGE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case BUG_UPDATE_RESET:
      return {
        bug: {},
      };
    default:
      return state;
  }
};

// export const relatedProductsReducer = (
//   state = { products: [], loading: true },
//   { type, payload }
// ) => {
//   switch (type) {
//     case RELATED_PRODUCT_REQUEST:
//       return {
//         loading: true,
//       };

//     case RELATED_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         products: payload,
//         loading: false,
//       };
//     case RELATED_PRODUCT_FAIL:
//       return {
//         error: payload,
//         loading: false,
//       };

//     default:
//       return state;
//   }
// };

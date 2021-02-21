import axios from "axios";
import {
  BUGS_LIST_SUCCESS,
  BUGS_LIST_FAIL,
  BUG_DETAILS_REQUEST,
  BUG_DETAILS_FAIL,
  BUG_DETAILS_SUCCESS,
  BUG_DELETE_REQUEST,
  BUG_DELETE_SUCCESS,
  BUG_DELETE_FAIL,
  BUG_UPDATE_REQUEST,
  BUG_UPDATE_SUCCESS,
  BUG_UPDATE_FAIL,
  BUG_CREATE_REQUEST,
  BUG_CREATE_SUCCESS,
  BUG_CREATE_FAIL,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Desc: Gets all products
// access: public
export const listProducts = (keyword = "", currentPage) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://bugtracker-api-1.herokuapp.com/api/v1/bugs?keyword=${keyword}&page=${currentPage}`
    );
    dispatch({
      type: BUGS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUGS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const bugDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BUG_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://bugtracker-api-1.herokuapp.com/api/v1/bugs/${id}`
    );
    dispatch({
      type: BUG_DETAILS_SUCCESS,
      payload: data,
    });

    dispatch(getRelatedProducts(id));
  } catch (error) {
    dispatch({
      type: BUG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletebug = (id) => async (dispatch) => {
  dispatch({ type: BUG_DELETE_REQUEST });
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    await axios.delete(
      `https://bugtracker-api-1.herokuapp.com/api/v1/bugs/${id}`
    );
    dispatch({
      type: BUG_DELETE_SUCCESS,
    });
  } catch (error) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: BUG_DELETE_FAIL,
    });
  }
};

export const createBug = (formData) => async (dispatch) => {
  dispatch({ type: BUG_CREATE_REQUEST });
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(formData);
    const { data } = await axios.post(
      "https://bugtracker-api-1.herokuapp.com/api/v1/bugs",
      body,
      config
    );
    dispatch({
      type: BUG_CREATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: BUG_CREATE_FAIL,
    });
  }
};

export const updateBug = (bug) => async (dispatch, getstate) => {
  dispatch({
    type: BUG_UPDATE_REQUEST,
  });
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `https://bugtracker-api-1.herokuapp.com/api/v1/bugs/${bug._id}`,
      bug,
      config
    );
    dispatch({
      type: BUG_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: BUG_UPDATE_FAIL,
    });
  }
};

// export const getRelatedProducts = (id) => async (dispatch) => {
//   dispatch({ type: RELATED_PRODUCT_REQUEST });
//   try {
//     const { data } = await axios.get(
//       `https://cheapzone-api.herokuapp.com/api/v1/products/${id}/relatedProducts`
//     );
//     dispatch({
//       type: RELATED_PRODUCT_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: RELATED_PRODUCT_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

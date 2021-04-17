import {
  DB_FILL_FAIL,
  DB_FILL_REQUEST,
  DB_FILL_RESET,
  DB_FILL_SUCCESS,
} from "../constants/dbConstants";

export const dbFillReducer = (
  state = { loading: false, success: null, pasajes: [] },
  action
) => {
  switch (action.type) {
    case DB_FILL_REQUEST:
      return { loading: true };
    case DB_FILL_SUCCESS:
      return { loading: false, success: true, pasajes: action.payload };
    case DB_FILL_FAIL:
      return { loading: false, success: false, error: action.payload };
    case DB_FILL_RESET:
      return {};
    default:
      return state;
  }
};

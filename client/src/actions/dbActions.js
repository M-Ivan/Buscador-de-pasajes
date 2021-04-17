import Axios from "axios";
import {
  DB_FILL_REQUEST,
  DB_FILL_SUCCESS,
  DB_FILL_FAIL,
} from "../constants/dbConstants";

export const fillDB = () => async (dispatch) => {
  dispatch({ type: DB_FILL_REQUEST });
  try {
    const { data } = await Axios.get(`/api/pasajes/seed`);
    dispatch({ type: DB_FILL_SUCCESS, payload: data });
    console.log("dataAction", data);
  } catch (error) {
    dispatch({ type: DB_FILL_FAIL, payload: error.message });
  }
};

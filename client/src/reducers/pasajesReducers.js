import {
  PASAJE_DESTINOS_FAIL,
  PASAJE_DESTINOS_REQUEST,
  PASAJE_DESTINOS_SUCCESS,
  PASAJE_LIST_FAIL,
  PASAJE_LIST_REQUEST,
  PASAJE_LIST_SUCCESS,
  PASAJE_ORIGENES_FAIL,
  PASAJE_ORIGENES_REQUEST,
  PASAJE_ORIGENES_SUCCESS,
} from "../constants/pasajesConstants";

export const pasajesListReducer = (
  state = { loading: true, pasajes: [] },
  action
) => {
  switch (action.type) {
    case PASAJE_LIST_REQUEST:
      return { loading: true };
    case PASAJE_LIST_SUCCESS:
      return { loading: false, pasajes: action.payload };
    case PASAJE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const destinosListReducer = (
  state = { loading: true, destinos: [] },
  action
) => {
  switch (action.type) {
    case PASAJE_DESTINOS_REQUEST:
      return { loading: true };
    case PASAJE_DESTINOS_SUCCESS:
      return { loading: false, destinos: action.payload };
    case PASAJE_DESTINOS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const origenesListReducer = (
  state = { loading: true, origenes: [] },
  action
) => {
  switch (action.type) {
    case PASAJE_ORIGENES_REQUEST:
      return { loading: true };
    case PASAJE_ORIGENES_SUCCESS:
      return { loading: false, origenes: action.payload };
    case PASAJE_ORIGENES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

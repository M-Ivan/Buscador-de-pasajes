import {
  PASAJE_LIST_FAIL,
  PASAJE_LIST_REQUEST,
  PASAJE_LIST_SUCCESS,
  PASAJE_DESTINOS_REQUEST,
  PASAJE_DESTINOS_SUCCESS,
  PASAJE_DESTINOS_FAIL,
  PASAJE_ORIGENES_REQUEST,
  PASAJE_ORIGENES_SUCCESS,
  PASAJE_ORIGENES_FAIL,
} from "../constants/pasajesConstants";
import Axios from "axios";

// Hace request siempre al api estatico
// y es inalterable por los params,
// podria usarse el listPasajes, pero
// para development era mas comodo ya que
// al hacer una request estatica no cambian
// los valores que devuelve
export const listDestinos = () => async (dispatch) => {
  dispatch({ type: PASAJE_DESTINOS_REQUEST });
  try {
    const destinos = [];
    // Todas las request a la api estan pasadas
    // por un proxy con la direccion del server,
    // ver client/package.json
    await Axios.get(`/api/pasajes`).then((response) => {
      response.data.forEach((pasaje) =>
        destinos.push(pasaje.origin, pasaje.destination)
      );
      //   console.log("dataAction", destinos);    });
      dispatch({ type: PASAJE_DESTINOS_SUCCESS, payload: destinos });
    });
  } catch (error) {
    dispatch({ type: PASAJE_DESTINOS_FAIL, payload: error.message });
  }
};

// Misma idea que listDestinos, solo que se descarto
// en su lugar se creo un array con todos los
// destinos/origenes y se lo mapeo
export const listOrigenes = () => async (dispatch) => {
  dispatch({ type: PASAJE_ORIGENES_REQUEST });
  try {
    const origenes = [];
    await Axios.get(`/api/pasajes`).then((response) => {
      response.data.forEach((pasaje) => origenes.push(pasaje.origin));
    });
    console.log("dataAction", origenes);

    dispatch({ type: PASAJE_ORIGENES_SUCCESS, payload: origenes });
  } catch (error) {
    dispatch({ type: PASAJE_ORIGENES_FAIL, payload: error.message });
  }
};

// hace fetch de los pasajes con los valores que le pases
// como params en la url, en el backend estos valores
// funcionan como filtro para devolver data especifica
export const listPasajes = ({
  origin = "",
  destination = "",
  min = "",
  max = "",
  order = "",
}) => async (dispatch) => {
  dispatch({
    type: PASAJE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `/api/pasajes?origin=${origin}&destination=${destination}&min=${min}&max=${max}&order=${order}`
    );
    dispatch({ type: PASAJE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PASAJE_LIST_FAIL, payload: error.message });
  }
};

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { dbFillReducer } from "./reducers/dbReducers";

import {
  pasajesListReducer,
  destinosListReducer,
  origenesListReducer,
} from "./reducers/pasajesReducers";

const reducer = combineReducers({
  pasajesList: pasajesListReducer,
  destinosList: destinosListReducer,
  origenesList: origenesListReducer,
  dbFill: dbFillReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;

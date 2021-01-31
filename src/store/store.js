import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {persistReducer,persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import thunk from "redux-thunk";
import { reducer, MODULE_NAME } from "./reducers";

const movieReducer = combineReducers({
  [MODULE_NAME]: reducer,
});
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig,movieReducer)
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export let persistor = persistStore(store)



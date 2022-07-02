import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from 'reduxjs-toolkit-persist/lib/storage';
import { persistStore, persistCombineReducers } from 'reduxjs-toolkit-persist';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import pokemonReducer from "./pokemon-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: 'pokedex',
  version: 1,
  storage,
  stateReconciler: autoMergeLevel1,
};

const _persistedReducer = persistCombineReducers(
  persistConfig,
  {
    pokemon: pokemonReducer,
  },
);


export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "../saga";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

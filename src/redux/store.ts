import { combineReducers } from "redux";
import filtersReducer from "./filters/slice";
import filmsReducer from "./films/slice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import { useDispatch } from "react-redux";
import { filmsApi } from "./services/films";
import { userApi } from "./services/user";

export const rootReducer = combineReducers({
  user: userReducer,
  filters: filtersReducer,
  films: filmsReducer,
  [filmsApi.reducerPath]: filmsApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filmsApi.middleware)
      .concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

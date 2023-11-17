import { configureStore } from "@reduxjs/toolkit";
import { questionApi } from "./services";

const store = configureStore({
  reducer: {
    [questionApi.reducerPath]: questionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionApi.middleware),
});

export default store;

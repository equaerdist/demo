import { configureStore } from "@reduxjs/toolkit/react";
import { employeeApi } from "./services/employeeApiV1";
import { hintApi } from "./services/hintApiV1";
import { unitApi } from "./services/untiApiV1";

export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
    [hintApi.reducerPath]: hintApi.reducer,
    [unitApi.reducerPath]: unitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(employeeApi.middleware)
      .concat(hintApi.middleware)
      .concat(unitApi.middleware),
});

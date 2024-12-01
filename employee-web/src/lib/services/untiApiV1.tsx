import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetUnitResponse } from "../../types/Contracts/V1/Unit/GetUnitResponse";
import { GetUnitRequest } from "../../types/Contracts/V1/Unit/GetUnitRequest";

export const unitApi = createApi({
  reducerPath: "unitApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/unit" }),
  endpoints: (builder) => ({
    getUnitById: builder.query<GetUnitResponse, GetUnitRequest>({
      query: (req) => ({ url: ``, method: "POST", body: req }),
    }),
  }),
});

export const { useGetUnitByIdQuery } = unitApi;

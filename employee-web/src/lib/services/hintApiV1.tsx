import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetEmployeeRolesResponse } from "../../types/Contracts/V1/Hint/GetEmployeeRolesResponse";
import { GetEmployeeUnitsRequest } from "../../types/Contracts/V1/Hint/GetEmployeeUnitsRequest";
import { GetEmployeePositionsRequest } from "../../types/Contracts/V1/Hint/GetEmployeePositionsRequest";
import { GetEmployeePositionsResponse } from "../../types/Contracts/V1/Hint/GetEmployeePositionsResponse";
import { GetEmployeeProjectsRequest } from "../../types/Contracts/V1/Hint/GetEmployeeProjectsRequest";
import { GetEmployeeProjectsResponse } from "../../types/Contracts/V1/Hint/GetEmployeeProjectsResponse";
import { GetEmployeeUnitsResponse } from "../../types/Contracts/V1/Hint/GetEmployeeUnitsResponse";
import { GetEmployeeNamesRequest } from "../../types/Contracts/V1/Hint/GetEmployeeNamesRequest";
import { GetEmployeeNamesResponse } from "../../types/Contracts/V1/Hint/GetEmployeeNamesResponse";
import { GetEmployeeCitiesRequest } from "../../types/Contracts/V1/Hint/GetEmployeeCItiesRequest";
import { GetEmployeeCitiesResponse } from "../../types/Contracts/V1/Hint/GetEmployeeCitiesResponse";
import { GetEmployeeRolesRequest } from "../../types/Contracts/V1/Hint/GetEmployeeRolesRequest";

export const hintApi = createApi({
  reducerPath: "hintApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/hint" }),

  endpoints: (builder) => ({
    getEmployeeCities: builder.query<
      GetEmployeeCitiesResponse,
      GetEmployeeCitiesRequest
    >({
      query: (req) => ({ url: "", method: "POST", body: req }),
    }),
    getEmployeeRoles: builder.query<
      GetEmployeeRolesResponse,
      GetEmployeeRolesRequest
    >({
      query: (req) => ({ url: "", method: "POST", body: req }),
    }),
    getEmployeePositions: builder.query<
      GetEmployeePositionsResponse,
      GetEmployeePositionsRequest
    >({
      query: (req) => ({ url: "", method: "POST", body: req }),
    }),
    getEmployeeProjects: builder.query<
      GetEmployeeProjectsResponse,
      GetEmployeeProjectsRequest
    >({
      query: (req) => ({ url: "", method: "POST", body: req }),
    }),
    getEmployeeUnits: builder.query<
      GetEmployeeUnitsResponse,
      GetEmployeeUnitsRequest
    >({
      query: (req) => ({ url: "", method: "POST", body: req }),
    }),
    getEmployeeNames: builder.query<
      GetEmployeeNamesResponse,
      GetEmployeeNamesRequest
    >({
      query: (req) => ({ url: "", method: "POST", body: req }),
    }),
  }),
});

export const {
  useGetEmployeeCitiesQuery,
  useGetEmployeePositionsQuery,
  useGetEmployeeProjectsQuery,
  useGetEmployeeRolesQuery,
  useGetEmployeeUnitsQuery,
  useGetEmployeeNamesQuery,
} = hintApi;

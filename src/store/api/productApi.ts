import { createApi, retry } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { ApiAction, IFilter, IProduct } from "../../types";
import { setTotalItems } from "../totalItems";

const retrieveData = <T>(res: { result: T }) => res.result;
const uniqueize = <T>(arr: T[]) => Array.from(new Set(arr));

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: retry(baseQuery),
  endpoints: (builder) => ({
    getIds: builder.query<string[], { offset: number; limit: number }>({
      query: (pagination) => ({
        url: "",
        body: {
          action: ApiAction.getIds,
          params: pagination,
        },
      }),
      transformResponse: (response: { result: string[] }) => {
        return uniqueize(retrieveData(response));
      },
    }),
    getAllPrices: builder.query<number[], void>({
      query: () => ({
        url: "",
        body: {
          action: ApiAction.getFields,
          params: { field: "price" },
        },
      }),
      transformResponse: (response: { result: number[] }) => {
        return uniqueize(retrieveData(response)).sort((a, b) => a - b);
      },
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        const pricesCount = (await queryFulfilled).data.length;
        dispatch(setTotalItems(pricesCount));
      },
    }),
    getAllBrands: builder.query<string[], void>({
      query: () => ({
        url: "",
        body: {
          action: ApiAction.getFields,
          params: { field: "brand" },
        },
      }),
      transformResponse: (response: { result: string[] }) => {
        return uniqueize(retrieveData(response))
          .filter((brand) => brand)
          .sort();
      },
    }),
    getIdsByFilter: builder.query<string[], IFilter>({
      query: (filter) => ({
        url: "",
        body: {
          action: ApiAction.filter,
          params: filter,
        },
      }),
      transformResponse: (response: { result: string[] }) => {
        return uniqueize(retrieveData(response));
      },
    }),
    getProductsById: builder.query<IProduct[], string[]>({
      query: (ids) => ({
        url: "",
        body: {
          action: ApiAction.getItems,
          params: {
            ids,
          },
        },
      }),
      transformResponse: (response: { result: IProduct[] }) => {
        const ids = {} as { [key: string]: boolean };
        const products = response.result.filter((product) => {
          if (product.id in ids) return false;
          return (ids[product.id] = true);
        });
        return products;
      },
    }),
  }),
});

export const {
  useGetIdsQuery,
  useGetAllPricesQuery,
  useGetAllBrandsQuery,
  useGetIdsByFilterQuery,
  useGetProductsByIdQuery,
} = productApi;

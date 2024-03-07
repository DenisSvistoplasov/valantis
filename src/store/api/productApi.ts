import { FetchBaseQueryError, createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { ApiAction, IFilter, IProduct } from "../../types";
import { RootState } from "../store";
import { selectFilter } from "../filterSlice";
//  @ts-ignore
export const productApi = createApi({
  reducerPath: "products",
  baseQuery,
  endpoints: (builder) => ({
    getIdsByFilter: builder.query<string[], IFilter>({
      queryFn: async (filter, api, extraOptions, baseQuery) => {
        try {
          const { data } = await baseQuery({
            url: "",
            body: {
              action: ApiAction.filter,
              params: filter,
            },
          });
          console.log("data: ", data);
          return { data: data as string[] };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
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
    }),
    getProducts: builder.query<IProduct[], undefined>({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        const dispatch = api.dispatch;
        const state = api.getState() as RootState;
        const filter = selectFilter(state);

        try {
          const { data: ids } = await dispatch(
            productApi.endpoints.getIdsByFilter.initiate(filter)
          );
          console.log("ids: ", ids);
          if (!ids) return { data: [] };

//  @ts-ignore
          const { data: products } = await dispatch(
            productApi.endpoints.getProductsById.initiate(ids)
          );
          console.log("products: ", products);
          return { data: products || [] };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
  }),
});

export const { getIdsByFilter, getProductsById, getProducts } = productApi;

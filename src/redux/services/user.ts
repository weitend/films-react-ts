import { token } from "../../api/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import FavouriteBody from "./types/user-types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    changeFavourite: builder.mutation({
      query: ([id, body]: [id: string, body: FavouriteBody]) => ({
        url: `account/${id}/favorite`,
        method: "POST",
        body,
      }),
      transformResponse: (response) => {
        console.log(response);
      },
    }),
  }),
});

export const { useChangeFavouriteMutation } = userApi;

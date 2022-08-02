import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type UserType = {
  _id: string
  firstname: string
  lastname: string
  role: string
  login: string
  password: string
  plans: Array<string>
}

export type UserAuthorizationType = {
  login: string
  password: string
}

export const authorizationApi = createApi({
  tagTypes: ['Authorization'],
  reducerPath: 'authorizationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: String(process.env['REACT_APP_API_BASE_URL']),
    prepareHeaders: (headers, { getState }) => {
      headers.set('api-key', String(process.env['REACT_APP_API_KEY']))
      return headers
    },
  }),
  endpoints: (builder) => ({
    authorization: builder.mutation<UserType, UserAuthorizationType>({
      query: (user) => ({
        url: `/user/authorization`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Authorization'],
    }),
  }),
})

export const { useAuthorizationMutation } = authorizationApi

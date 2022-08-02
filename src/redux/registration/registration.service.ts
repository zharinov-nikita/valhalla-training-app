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

export type UserRegistrationType = {
  firstname: string
  lastname: string
  role: string
  login: string
  password: string
}

export const registrationApi = createApi({
  tagTypes: ['Registration'],
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: String(process.env['REACT_APP_API_BASE_URL']),
    prepareHeaders: (headers, { getState }) => {
      headers.set('api-key', String(process.env['REACT_APP_API_KEY']))
      return headers
    },
  }),
  endpoints: (builder) => ({
    registration: builder.mutation<UserType, UserRegistrationType>({
      query: (user) => ({
        url: `/user/registration`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Registration'],
    }),
  }),
})

export const { useRegistrationMutation } = registrationApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API

// user
const login: string = localStorage.getItem('login') || ''
const password: string = localStorage.getItem('password') || ''
// user

export type UserType = {
  _id: string
  name: string
  login: string
  password: string
}

export type UserCreateType = {
  name: string
  login: string
  password: string
}

export type UserAuthType = {
  login: string
  password: string
}

export const userApi = createApi({
  tagTypes: ['User'],
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    find: builder.query<UserType[], string>({
      query: (user) => ({
        url: `/user`,
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
      }),
      providesTags: ['User'],
    }),
    create: builder.mutation<UserType, UserCreateType>({
      query: (user) => ({
        url: `/user`,
        method: 'POST',
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    findByIdAndUpdate: builder.mutation<UserType, UserType>({
      query: (user) => ({
        url: `/user/${user._id}`,
        method: 'PATCH',
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    findByIdAndDelete: builder.mutation<UserType, UserType>({
      query: (user) => ({
        url: `/user/${user._id}`,
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useFindQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = userApi

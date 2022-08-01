import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API
const headers = {
  'api-key': String(apiKey),
  login: localStorage.getItem('login') || '',
  password: localStorage.getItem('password') || '',
}

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

export type UserAuthorizationType = {
  login: string
  password: string
}

export type UserUpdateType = {
  headers: {
    login: string
    password: string
  }
  _id: string
  firstname?: string
  lastname?: string
  role?: string
  login?: string
  password?: string
  plans?: Array<string>
}

export type UserDeleteType = {
  _id: string
  login: string
  password: string
}

export const userApi = createApi({
  tagTypes: ['User'],
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    findByLogin: builder.query<UserType, UserAuthorizationType>({
      query: (user) => ({
        url: `/user`,
        method: 'GET',
        headers: { ...headers, login: user.login, password: user.password },
      }),
      providesTags: ['User'],
    }),
    authorization: builder.mutation<UserType, UserAuthorizationType>({
      query: (user) => ({
        url: `/user/authorization`,
        method: 'POST',
        headers: { ...headers, login: user.login, password: user.password },
      }),
      invalidatesTags: ['User'],
    }),
    registration: builder.mutation<UserType, UserRegistrationType>({
      query: (user) => ({
        url: `/user/registration`,
        method: 'POST',
        body: user,
        headers,
      }),
      invalidatesTags: ['User'],
    }),
    findByIdAndUpdate: builder.mutation<UserType, UserUpdateType>({
      query: (user) => ({
        url: `/user/${user._id}`,
        method: 'PATCH',
        body: user,
        headers: { ...headers, ...user.headers },
      }),
      invalidatesTags: ['User'],
    }),
    findByIdAndDelete: builder.mutation<UserType, UserDeleteType>({
      query: (user) => ({
        url: `/user/${user._id}`,
        method: 'DELETE',
        headers,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useFindByLoginQuery,
  useAuthorizationMutation,
  useRegistrationMutation,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = userApi

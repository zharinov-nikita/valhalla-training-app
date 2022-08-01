import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API

const login = localStorage.getItem('login') || ''
const password = localStorage.getItem('password') || ''

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
    findByLogin: builder.query<UserType, any>({
      query: (user) => ({
        url: `/user`,
        method: 'GET',
        headers: {
          'api-key': String(apiKey),
          login: login.length > 0 ? login : user.login,
          password: login.length > 0 ? password : user.password,
        },
      }),
      providesTags: ['User'],
    }),
    authorization: builder.mutation<UserType, UserAuthorizationType>({
      query: (user) => ({
        url: `/user/authorization`,
        method: 'POST',
        headers: {
          'api-key': String(apiKey),
          login: login.length > 0 ? login : user.login,
          password: login.length > 0 ? password : user.password,
        },
      }),
      invalidatesTags: ['User'],
    }),
    registration: builder.mutation<UserType, UserRegistrationType>({
      query: (user) => ({
        url: `/user/registration`,
        method: 'POST',
        body: user,
        headers: {
          'api-key': String(apiKey),
          login: login.length > 0 ? login : user.login,
          password: login.length > 0 ? password : user.password,
        },
      }),
      invalidatesTags: ['User'],
    }),
    findByIdAndUpdate: builder.mutation<UserType, UserUpdateType>({
      query: (user) => ({
        url: `/user/${user._id}`,
        method: 'PATCH',
        body: user,
        headers: {
          'api-key': String(apiKey),
          login: login.length > 0 ? login : user.login,
          password: login.length > 0 ? password : user.password,
        },
      }),
      invalidatesTags: ['User'],
    }),
    findByIdAndDelete: builder.mutation<UserType, UserDeleteType>({
      query: (user) => ({
        url: `/user/${user._id}`,
        method: 'DELETE',
        headers: {
          'api-key': String(apiKey),
          login: login.length > 0 ? login : user.login,
          password: login.length > 0 ? password : user.password,
        },
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

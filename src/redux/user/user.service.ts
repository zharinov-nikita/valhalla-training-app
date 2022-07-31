import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API

export type UserType = {
  _id: string
  firstname: string
  lastname: string
  role: string
  login: string
  password: string
  plans: Array<string>
}

export type UserTypeUpdate = {
  _id?: string
  firstname?: string
  lastname?: string
  role?: string
  login?: string
  password?: string
  plans?: Array<string>
}

export const userApi = createApi({
  tagTypes: ['User'],
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    findById: builder.query<UserType, string>({
      query: (_id) => ({
        url: `/user/62e65432fd1fc3f24598b813`,
        headers: { 'api-key': String(apiKey) },
      }),
      providesTags: ['User'],
    }),
    findByIdAndUpdate: builder.mutation<UserType, UserTypeUpdate>({
      query: (user) => ({
        url: `/user/62e65432fd1fc3f24598b813`,
        method: 'PATCH',
        body: user,
        headers: { 'api-key': String(apiKey) },
      }),
      invalidatesTags: ['User'],
    }),
    findByIdAndDelete: builder.mutation<UserType, UserType>({
      query: (user) => ({
        url: `/user/62e65432fd1fc3f24598b813`,
        method: 'DELETE',
        headers: { 'api-key': String(apiKey) },
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useFindByIdQuery,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = userApi

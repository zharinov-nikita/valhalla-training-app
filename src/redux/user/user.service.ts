import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { store } from '../..'

export type UserType = {
  _id: string
  firstname: string
  lastname: string
  role: string
  login: string
  password: string
  plans: Array<string>
}

export type UserFindType = {
  _id: string
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
}

export const userApi = createApi({
  tagTypes: ['User'],
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: String(process.env['REACT_APP_API_BASE_URL']),
    prepareHeaders: (headers, { getState }) => {
      headers.set('api-key', String(process.env['REACT_APP_API_KEY']))
      headers.set('login', store.getState().authorization.currentUser.login)
      headers.set('password', store.getState().authorization.currentUser.password)
      return headers
    },
  }),
  endpoints: (builder) => ({
    findByLogin: builder.query<UserType, UserFindType>({
      query: (user) => ({
        url: `/user/${user._id}`,
        method: 'GET',
        headers: { login: user.login, password: user.password },
      }),
      providesTags: ['User'],
    }),
    findByIdAndUpdate: builder.mutation<UserType, UserUpdateType>({
      query: (user) => ({
        url: `/user`,
        method: 'PATCH',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    findByIdAndDelete: builder.mutation<UserType, UserDeleteType>({
      query: (user) => ({
        url: `/user`,
        method: 'DELETE',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useFindByLoginQuery,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = userApi

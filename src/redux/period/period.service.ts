import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API

// user
const login: string = localStorage.getItem('login') || ''
const password: string = localStorage.getItem('password') || ''
// user

export type PeriodType = {
  _id: string
  title: string
  description: string
  start: string
  finish: string
  status: string
  planId: string
}

export type PeriodCreateType = {
  title: string
  description: string
  start: string
  finish: string
  status: string
  planId: string
}

export const periodApi = createApi({
  tagTypes: ['Period'],
  reducerPath: 'periodApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    findByField: builder.query<PeriodType[], string>({
      query: (_id) => ({
        url: `/period?planId=${_id}`,
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
      }),
      providesTags: ['Period'],
    }),
    create: builder.mutation<PeriodType, PeriodCreateType>({
      query: (period) => ({
        url: `/period`,
        method: 'POST',
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
        body: period,
      }),
      invalidatesTags: ['Period'],
    }),
    findByIdAndUpdate: builder.mutation<PeriodType, PeriodType>({
      query: (period) => ({
        url: `/period/${period._id}`,
        method: 'PATCH',
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
        body: period,
      }),
      invalidatesTags: ['Period'],
    }),
    findByIdAndDelete: builder.mutation<PeriodType, PeriodType>({
      query: (period) => ({
        url: `/period/${period._id}`,
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['Period'],
    }),
  }),
})

export const {
  useFindByFieldQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = periodApi

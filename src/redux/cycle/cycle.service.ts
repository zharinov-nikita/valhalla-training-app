import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API

// user
const login: string = localStorage.getItem('login') || ''
const password: string = localStorage.getItem('password') || ''
// user

export type CycleType = {
  _id: string
  title: string
  description: string
  start: string
  finish: string
  status: string
  periodId: string
}

export type CycleCreateType = {
  title: string
  description: string
  start: string
  finish: string
  status: string
  periodId: string
}

export const cycleApi = createApi({
  tagTypes: ['Cycle'],
  reducerPath: 'cycleApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    findByField: builder.query<CycleType[], string>({
      query: (_id) => ({
        url: `/cycle?periodId=${_id}`,
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
      }),
      providesTags: ['Cycle'],
    }),
    create: builder.mutation<CycleType, CycleCreateType>({
      query: (cycle) => ({
        url: `/cycle`,
        method: 'POST',
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
        body: cycle,
      }),
      invalidatesTags: ['Cycle'],
    }),
    findByIdAndUpdate: builder.mutation<CycleType, CycleType>({
      query: (cycle) => ({
        url: `/cycle/${cycle._id}`,
        method: 'PATCH',
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
        body: cycle,
      }),
      invalidatesTags: ['Cycle'],
    }),
    findByIdAndDelete: builder.mutation<CycleType, CycleType>({
      query: (cycle) => ({
        url: `/cycle/${cycle._id}`,
        headers: {
          'api-key': apiKey,
          login,
          password,
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['Cycle'],
    }),
  }),
})

export const {
  useFindByFieldQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = cycleApi

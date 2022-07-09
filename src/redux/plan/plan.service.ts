import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API

export type PlanType = {
  _id: string
  title: string
  description: string
  start: string
  finish: string
  status: string
  planId: string
}

export type PlanCreateType = {
  title: string
  description: string
  start: string
  finish: string
  status: string
}

export const planApi = createApi({
  tagTypes: ['Plan'],
  reducerPath: 'planApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    find: builder.query<PlanType[], string>({
      query: () => ({
        url: `/plan`,
        headers: {
          'api-key': apiKey,
        },
      }),
      providesTags: ['Plan'],
    }),
    create: builder.mutation<PlanType, PlanCreateType>({
      query: (plan) => ({
        url: `/plan`,
        method: 'POST',
        headers: {
          'api-key': apiKey,
        },
        body: plan,
      }),
      invalidatesTags: ['Plan'],
    }),
    findByIdAndUpdate: builder.mutation<PlanType, PlanType>({
      query: (plan) => ({
        url: `/plan/${plan._id}`,
        method: 'PATCH',
        headers: {
          'api-key': apiKey,
        },
        body: plan,
      }),
      invalidatesTags: ['Plan'],
    }),
    findByIdAndDelete: builder.mutation<PlanType, PlanType>({
      query: (plan) => ({
        url: `/plan/${plan._id}`,
        headers: {
          'api-key': apiKey,
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['Plan'],
    }),
  }),
})

export const {
  useFindQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = planApi

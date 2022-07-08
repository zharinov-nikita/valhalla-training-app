import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
  baseQuery: fetchBaseQuery({ baseUrl: process.env['REACT_APP_API_BASE_URL'] }),
  endpoints: (builder) => ({
    find: builder.query<PeriodType[], string>({
      query: () => `/period`,
      providesTags: ['Period'],
    }),
    create: builder.mutation<PeriodType, PeriodCreateType>({
      query: (period) => ({
        url: `/period`,
        method: 'POST',
        body: period,
      }),
      invalidatesTags: ['Period'],
    }),
    findByIdAndUpdate: builder.mutation<PeriodType, PeriodType>({
      query: (period) => ({
        url: `/period/${period._id}`,
        method: 'PATCH',
        body: period,
      }),
      invalidatesTags: ['Period'],
    }),
    findByIdAndDelete: builder.mutation<PeriodType, PeriodType>({
      query: (period) => ({
        url: `/period/${period._id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Period'],
    }),
  }),
})

export const {
  useFindQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = periodApi

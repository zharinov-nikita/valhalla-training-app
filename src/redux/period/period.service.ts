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
  baseQuery: fetchBaseQuery({ baseUrl: 'http://89.223.125.238:8080/api' }),
  endpoints: (builder) => ({
    findById: builder.query<PeriodType[], string>({
      query: (param) => `/period/${param}`,
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
  }),
})

export const {
  useFindByIdQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
} = periodApi

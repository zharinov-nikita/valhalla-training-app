import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type PeriodType = {
  _id: string
  title: string
  description: string
  status: string
  periodId: string
}

export const periodApi = createApi({
  tagTypes: ['Period'],
  reducerPath: 'periodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    findById: builder.query<PeriodType[], string>({
      query: (param) => `/period/${param}`,
      providesTags: ['Period'],
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

export const { useFindByIdQuery, useFindByIdAndUpdateMutation } = periodApi

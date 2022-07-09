import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API

export type DayType = {
  _id: string
  title: string
  description: string
  status: string
  cycleId: string
}

export type DayCreateType = {
  title: string
  description: string
  status: string
  cycleId: string
}

export const dayApi = createApi({
  tagTypes: ['Day'],
  reducerPath: 'dayApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    findByField: builder.query<DayType[], string>({
      query: (_id) => ({
        url: `/day?cycleId=${_id}`,
        headers: {
          'api-key': apiKey,
        },
      }),
      providesTags: ['Day'],
    }),
    create: builder.mutation<DayType, DayCreateType>({
      query: (day) => ({
        url: `/day`,
        method: 'POST',
        headers: {
          'api-key': apiKey,
        },
        body: day,
      }),
      invalidatesTags: ['Day'],
    }),
    findByIdAndUpdate: builder.mutation<DayType, DayType>({
      query: (day) => ({
        url: `/day/${day._id}`,
        method: 'PATCH',
        headers: {
          'api-key': apiKey,
        },
        body: day,
      }),
      invalidatesTags: ['Day'],
    }),
    findByIdAndDelete: builder.mutation<DayType, DayType>({
      query: (day) => ({
        url: `/day/${day._id}`,
        headers: {
          'api-key': apiKey,
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['Day'],
    }),
  }),
})

export const {
  useFindByFieldQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = dayApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API

export type WorkoutType = {
  _id: string
  title: string
  description: string
  status: string
  dayId: string
}

export type WorkoutCreateType = {
  title: string
  description: string
  status: string
  dayId: string
}

export const dayApi = createApi({
  tagTypes: ['Workout'],
  reducerPath: 'dayApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    findByField: builder.query<WorkoutType[], string>({
      query: (_id) => ({
        url: `/exercise?dayId=${_id}`,
        headers: {
          'api-key': apiKey,
        },
      }),
      providesTags: ['Workout'],
    }),
    create: builder.mutation<WorkoutType, WorkoutCreateType>({
      query: (day) => ({
        url: `/day`,
        method: 'POST',
        headers: {
          'api-key': apiKey,
        },
        body: day,
      }),
      invalidatesTags: ['Workout'],
    }),
    findByIdAndUpdate: builder.mutation<WorkoutType, WorkoutType>({
      query: (day) => ({
        url: `/day/${day._id}`,
        method: 'PATCH',
        headers: {
          'api-key': apiKey,
        },
        body: day,
      }),
      invalidatesTags: ['Workout'],
    }),
    findByIdAndDelete: builder.mutation<WorkoutType, WorkoutType>({
      query: (day) => ({
        url: `/day/${day._id}`,
        headers: {
          'api-key': apiKey,
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['Workout'],
    }),
  }),
})

export const {
  useFindByFieldQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = dayApi

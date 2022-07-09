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

export const workoutApi = createApi({
  tagTypes: ['Workout'],
  reducerPath: 'workoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    findByField: builder.query<WorkoutType[], string>({
      query: (_id) => ({
        url: `/workout?dayId=${_id}`,
        headers: {
          'api-key': apiKey,
        },
      }),
      providesTags: ['Workout'],
    }),
    create: builder.mutation<WorkoutType, WorkoutCreateType>({
      query: (workout) => ({
        url: `/workout`,
        method: 'POST',
        headers: {
          'api-key': apiKey,
        },
        body: workout,
      }),
      invalidatesTags: ['Workout'],
    }),
    findByIdAndUpdate: builder.mutation<WorkoutType, WorkoutType>({
      query: (workout) => ({
        url: `/workout/${workout._id}`,
        method: 'PATCH',
        headers: {
          'api-key': apiKey,
        },
        body: workout,
      }),
      invalidatesTags: ['Workout'],
    }),
    findByIdAndDelete: builder.mutation<WorkoutType, WorkoutType>({
      query: (workout) => ({
        url: `/workout/${workout._id}`,
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
} = workoutApi

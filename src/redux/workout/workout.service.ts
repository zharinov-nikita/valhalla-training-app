import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
  baseQuery: fetchBaseQuery({ baseUrl: process.env['REACT_APP_API_BASE_URL'] }),
  endpoints: (builder) => ({
    findById: builder.query<WorkoutType[], string>({
      query: (param) => `/workout/${param}`,
      providesTags: ['Workout'],
    }),
    create: builder.mutation<WorkoutType, WorkoutCreateType>({
      query: (workout) => ({
        url: `/workout`,
        method: 'POST',
        body: workout,
      }),
      invalidatesTags: ['Workout'],
    }),
    findByIdAndUpdate: builder.mutation<WorkoutType, WorkoutType>({
      query: (workout) => ({
        url: `/workout/${workout._id}`,
        method: 'PATCH',
        body: workout,
      }),
      invalidatesTags: ['Workout'],
    }),
  }),
})

export const {
  useFindByIdQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
} = workoutApi

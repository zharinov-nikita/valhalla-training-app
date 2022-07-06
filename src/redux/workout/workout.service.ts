import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type WorkoutType = {
  _id: string
  title: string
  description: string
  status: string
  dayId: string
}

export const workoutApi = createApi({
  tagTypes: ['Workout'],
  reducerPath: 'workoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    findById: builder.query<WorkoutType[], string>({
      query: (param) => `/workout/${param}`,
      providesTags: ['Workout'],
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

export const { useFindByIdQuery, useFindByIdAndUpdateMutation } = workoutApi

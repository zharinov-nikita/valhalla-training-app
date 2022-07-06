import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type ExerciseType = {
  _id: string
  title: string
  description: string
  status: string
  option: Array<{
    title: string
    value: string
  }>
  workoutId: string
}

export const exerciseApi = createApi({
  tagTypes: ['Exercise'],
  reducerPath: 'exerciseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    findById: builder.query<ExerciseType[], string>({
      query: (param) => `/exercise/${param}`,
      providesTags: ['Exercise'],
    }),
    findByIdAndUpdate: builder.mutation<ExerciseType, ExerciseType>({
      query: (exercise) => ({
        url: `/exercise/${exercise._id}`,
        method: 'PATCH',
        body: exercise,
      }),
      invalidatesTags: ['Exercise'],
    }),
  }),
})

export const { useFindByIdQuery, useFindByIdAndUpdateMutation } = exerciseApi

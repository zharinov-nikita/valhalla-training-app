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
    findByIdAndUpdate: builder.mutation<ExerciseType, ExerciseType>({
      query: (option) => ({
        url: `exercise/${option._id}`,
        method: 'PATCH',
        body: option,
      }),
      invalidatesTags: ['Exercise'],
    }),
  }),
})

export const { useFindByIdAndUpdateMutation } = exerciseApi

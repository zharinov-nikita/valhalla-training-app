import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type ExerciseType = {
  _id: string
  title: string
  description: string
  status: string
  option?: Array<{ id: number; title: string; value: string }>
  workoutId: string
}

export type ExerciseCreateType = {
  title: string
  description: string
  status: string
  option?: Array<{ id: number; title: string; value: string }>
  workoutId: string
}

export const exerciseApi = createApi({
  tagTypes: ['Exercise'],
  reducerPath: 'exerciseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://89.223.125.238:8080/api' }),
  endpoints: (builder) => ({
    findById: builder.query<ExerciseType[], string>({
      query: (param) => `/exercise/${param}`,
      providesTags: ['Exercise'],
    }),
    create: builder.mutation<ExerciseType, ExerciseCreateType>({
      query: (exercise) => ({
        url: `/exercise`,
        method: 'POST',
        body: exercise,
      }),
      invalidatesTags: ['Exercise'],
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

export const {
  useFindByIdQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
} = exerciseApi

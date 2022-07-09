import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API

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
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    findByField: builder.query<ExerciseType[], string>({
      query: (_id) => ({
        url: `/exercise?workoutId=${_id}`,
        headers: {
          'api-key': apiKey,
        },
      }),
      providesTags: ['Exercise'],
    }),
    create: builder.mutation<ExerciseType, ExerciseCreateType>({
      query: (exercise) => ({
        url: `/exercise`,
        method: 'POST',
        headers: {
          'api-key': apiKey,
        },
        body: exercise,
      }),
      invalidatesTags: ['Exercise'],
    }),
    findByIdAndUpdate: builder.mutation<ExerciseType, ExerciseType>({
      query: (exercise) => ({
        url: `/exercise/${exercise._id}`,
        method: 'PATCH',
        headers: {
          'api-key': apiKey,
        },
        body: exercise,
      }),
      invalidatesTags: ['Exercise'],
    }),
    findByIdAndDelete: builder.mutation<ExerciseType, ExerciseType>({
      query: (exercise) => ({
        url: `/exercise/${exercise._id}`,
        headers: {
          'api-key': apiKey,
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['Exercise'],
    }),
  }),
})

export const {
  useFindByFieldQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = exerciseApi

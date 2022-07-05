import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PropertyPropsType } from '../components/Property/Property'
import { StatusType } from '../components/Status/Status'

export type PlanType = {
  _id: string
  title: string
  description: string
  start: string
  finish: string
  status: StatusType
}

export type endponintType =
  | 'plan'
  | 'period'
  | 'cycle'
  | 'day'
  | 'workout'
  | 'exercise'
  | 'property'

export type PropertyType = {
  _id: string
  option: Array<{ title: string; value: string }>
  exerciseId: string
}

export type ExerciseType = {
  _id: string
  title: string
  description: string
  status: StatusType
  option: Array<{
    title: string
    value: string
  }>
  workoutId: string
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    find: builder.query<PlanType[], endponintType>({
      query: (endpont) => endpont,
    }),
    property: builder.query<PropertyType[], endponintType>({
      query: (endpont) => endpont,
    }),
    exercise: builder.query<ExerciseType[], string>({
      query: (workoutId) => `exercise/${workoutId}`,
    }),
  }),
})

export const { useFindQuery, usePropertyQuery, useExerciseQuery } = api

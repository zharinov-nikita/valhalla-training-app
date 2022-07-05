import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type PlanType = {
  _id: string
  title: string
  description: string
  status: string
  start: string
  finish: string
}

export type PeriodType = {
  _id: string
  title: string
  description: string
  status: string
  start: string
  finish: string
  plandId: string
}

export type CycleType = {
  _id: string
  title: string
  description: string
  status: string
  start: string
  finish: string
  periodId: string
}

export type DayType = {
  _id: string
  title: string
  description: string
  status: string
  cycleId: string
}

export type WorkoutType = {
  _id: string
  title: string
  description: string
  status: string
  dayId: string
}

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

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    plan: builder.query<PlanType[], string>({
      query: () => `plan`,
    }),
    period: builder.query<PeriodType[], string>({
      query: (param) => `period/${param}`,
    }),
    cycle: builder.query<CycleType[], string>({
      query: (param) => `cycle/${param}`,
    }),
    day: builder.query<DayType[], string>({
      query: (param) => `day/${param}`,
    }),
    workout: builder.query<WorkoutType[], string>({
      query: (param) => `workout/${param}`,
    }),
    exercise: builder.query<ExerciseType[], string>({
      query: (param) => `exercise/${param}`,
    }),
  }),
})

export const {
  usePlanQuery,
  usePeriodQuery,
  useCycleQuery,
  useDayQuery,
  useWorkoutQuery,
  useExerciseQuery,
} = api

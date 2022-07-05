import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
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

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    find: builder.query<PlanType[], endponintType>({
      query: (endpont) => endpont,
    }),
  }),
})

export const { useFindQuery } = api

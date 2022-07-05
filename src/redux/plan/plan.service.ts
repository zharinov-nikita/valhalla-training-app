// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { StatusType } from '../../components/Status/Status'

export type PlanType = {
  _id: string
  title: string
  description: string
  start: string
  finish: string
  status: StatusType
}

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    find: builder.query<PlanType[], string>({
      query: () => `plan`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFindQuery } = api

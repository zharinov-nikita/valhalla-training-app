import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type CycleType = {
  _id: string
  title: string
  description: string
  start: string
  finish: string
  status: string
  periodId: string
}

export type CycleCreateType = {
  title: string
  description: string
  start: string
  finish: string
  status: string
  periodId: string
}

export const cycleApi = createApi({
  tagTypes: ['Cycle'],
  reducerPath: 'cycleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    findById: builder.query<CycleType[], string>({
      query: (param) => `/cycle/${param}`,
      providesTags: ['Cycle'],
    }),
    create: builder.mutation<CycleType, CycleCreateType>({
      query: (cycle) => ({
        url: `/cycle`,
        method: 'POST',
        body: cycle,
      }),
      invalidatesTags: ['Cycle'],
    }),
    findByIdAndUpdate: builder.mutation<CycleType, CycleType>({
      query: (cycle) => ({
        url: `/cycle/${cycle._id}`,
        method: 'PATCH',
        body: cycle,
      }),
      invalidatesTags: ['Cycle'],
    }),
  }),
})

export const {
  useFindByIdQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
} = cycleApi

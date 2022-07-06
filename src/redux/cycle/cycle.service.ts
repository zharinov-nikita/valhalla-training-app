import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type CycleType = {
  _id: string
  title: string
  description: string
  status: string
  cycleId: string
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

export const { useFindByIdQuery, useFindByIdAndUpdateMutation } = cycleApi

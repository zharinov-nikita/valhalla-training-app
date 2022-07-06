import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type DayType = {
  _id: string
  title: string
  description: string
  status: string
  cycleId: string
}

export const dayApi = createApi({
  tagTypes: ['Day'],
  reducerPath: 'dayApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    findById: builder.query<DayType[], string>({
      query: (param) => `/day/${param}`,
      providesTags: ['Day'],
    }),
    findByIdAndUpdate: builder.mutation<DayType, DayType>({
      query: (day) => ({
        url: `/day/${day._id}`,
        method: 'PATCH',
        body: day,
      }),
      invalidatesTags: ['Day'],
    }),
  }),
})

export const { useFindByIdQuery, useFindByIdAndUpdateMutation } = dayApi
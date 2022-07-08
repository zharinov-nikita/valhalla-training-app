import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type PlanType = {
  _id: string
  title: string
  description: string
  start: string
  finish: string
  status: string
  planId: string
}

export type PlanCreateType = {
  title: string
  description: string
  start: string
  finish: string
  status: string
}

export const planApi = createApi({
  tagTypes: ['Plan'],
  reducerPath: 'planApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://89.223.125.238:8080/api' }),
  endpoints: (builder) => ({
    find: builder.query<PlanType[], string>({
      query: () => `/plan`,
      providesTags: ['Plan'],
    }),
    create: builder.mutation<PlanType, PlanCreateType>({
      query: (plan) => ({
        url: `/plan`,
        method: 'POST',
        body: plan,
      }),
      invalidatesTags: ['Plan'],
    }),
    findByIdAndUpdate: builder.mutation<PlanType, PlanType>({
      query: (plan) => ({
        url: `/plan/${plan._id}`,
        method: 'PATCH',
        body: plan,
      }),
      invalidatesTags: ['Plan'],
    }),
    findByIdAndDelete: builder.mutation<PlanType, PlanType>({
      query: (plan) => ({
        url: `/plan/${plan._id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Plan'],
    }),
  }),
})

export const {
  useFindQuery,
  useCreateMutation,
  useFindByIdAndUpdateMutation,
  useFindByIdAndDeleteMutation,
} = planApi

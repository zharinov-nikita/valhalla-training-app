import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// API
const apiBaseUrl = process.env['REACT_APP_API_BASE_URL']
const apiKey = process.env['REACT_APP_API_KEY']
// API

export type PlanType = {
  _id: string
  title: string
  status: 'ЗАПЛАНИРОВАНО' | 'ПРОЦЕСС' | 'ЗАВЕРШЕНО'
  athlete: string

  periods?: Array<{
    type:
      | 'ПОДГОТОВИТЕЛЬНЫЙ'
      | 'БАЗОВЫЙ'
      | 'ИНТЕСИВНЫЙ'
      | 'СОРЕВНОВАТЕЛЬНЫЙ'
      | 'ВОССТАНОВИТЕЛЬНЫЙ'
    status: 'ЗАПЛАНИРОВАНО' | 'ПРОЦЕСС' | 'ЗАВЕРШЕНО'

    cycles?: Array<{
      type: 'ПЕРВЫЙ' | 'ВТОРОЙ' | 'ТРЕТИЙ' | 'ЧЕТВЕРТЫЙ'
      status: 'ЗАПЛАНИРОВАНО' | 'ПРОЦЕСС' | 'ЗАВЕРШЕНО'

      days?: Array<{
        type: 'ТРЕНИРОВКА' | 'ВЫХОДНОЙ'
        status: 'ЗАПЛАНИРОВАНО' | 'ПРОЦЕСС' | 'ЗАВЕРШЕНО'

        workouts?: Array<{
          type: 'ДИСТАНЦИЯ' | 'СВЕРХ_ДИСТАНЦИЯ'
          completed: boolean

          exercises?: Array<{
            title: string
            completed: boolean

            options: Array<{
              completed?: boolean
              subOptions: Array<{ key: string; value: string }>
            }>
          }>
        }>
      }>
    }>
  }>
}

export const planApi = createApi({
  tagTypes: ['Plan'],
  reducerPath: 'planApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    find: builder.query<PlanType[], string>({
      query: (plan) => ({
        url: `/plan/?athlete=zharinov-danil`,
        headers: {
          'api-key': apiKey,
        },
      }),
      providesTags: ['Plan'],
    }),
    create: builder.mutation<PlanType, any>({
      query: (plan) => ({
        url: `/plan`,
        method: 'POST',
        headers: {
          'api-key': apiKey,
        },
        body: plan,
      }),
      invalidatesTags: ['Plan'],
    }),
    findByIdAndUpdate: builder.mutation<PlanType, any>({
      query: (plan) => ({
        url: `/plan/${plan._id}`,
        method: 'PATCH',
        headers: {
          'api-key': apiKey,
        },
        body: plan,
      }),
      invalidatesTags: ['Plan'],
    }),
    findByIdAndDelete: builder.mutation<PlanType, any>({
      query: (plan) => ({
        url: `/plan/${plan._id}`,
        headers: {
          'api-key': apiKey,
        },
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

import { configureStore } from '@reduxjs/toolkit'
import { api } from './service'
import { exerciseApi } from './exercise/exercise.service'
import { workoutApi } from './workout/workout.service'
import { dayApi } from './day/day.service'
import { cycleApi } from './cycle/cycle.service'
import { periodApi } from './period/period.service'
import { planApi } from './plan/plan.service'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [exerciseApi.reducerPath]: exerciseApi.reducer,
    [workoutApi.reducerPath]: workoutApi.reducer,
    [dayApi.reducerPath]: dayApi.reducer,
    [cycleApi.reducerPath]: cycleApi.reducer,
    [periodApi.reducerPath]: periodApi.reducer,
    [planApi.reducerPath]: planApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      exerciseApi.middleware,
      workoutApi.middleware,
      dayApi.middleware,
      cycleApi.middleware,
      periodApi.middleware,
      planApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

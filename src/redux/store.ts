import { configureStore } from '@reduxjs/toolkit'
import { api } from './service'
import { exerciseApi } from './exercise/exercise.service'
import { workoutApi } from './workout/workout.service'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [exerciseApi.reducerPath]: exerciseApi.reducer,
    [workoutApi.reducerPath]: workoutApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      exerciseApi.middleware,
      workoutApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

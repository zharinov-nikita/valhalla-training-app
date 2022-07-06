import { configureStore } from '@reduxjs/toolkit'
import { api } from './service'
import { exerciseApi } from './exercise/exercise.service'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [exerciseApi.reducerPath]: exerciseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, exerciseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

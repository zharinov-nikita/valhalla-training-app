import { combineReducers, configureStore } from '@reduxjs/toolkit'

// slice
import drawerReducer from './drawer/drawer.slice'

// service
import { planApi } from './plan/plan.service'
import { periodApi } from './period/period.service'
import { cycleApi } from './cycle/cycle.service'
import { dayApi } from './day/day.service'
import { workoutApi } from './workout/workout.service'
import { exerciseApi } from './exercise/exercise.service'

const rootReducer = combineReducers({
  // slice
  drawer: drawerReducer,
  // serivce
  [planApi.reducerPath]: planApi.reducer,
  [periodApi.reducerPath]: periodApi.reducer,
  [cycleApi.reducerPath]: cycleApi.reducer,
  [dayApi.reducerPath]: dayApi.reducer,
  [workoutApi.reducerPath]: workoutApi.reducer,
  [exerciseApi.reducerPath]: exerciseApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        planApi.middleware,
        periodApi.middleware,
        cycleApi.middleware,
        dayApi.middleware,
        workoutApi.middleware,
        exerciseApi.middleware
      ),
  })
}

export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

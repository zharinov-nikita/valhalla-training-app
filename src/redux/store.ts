import { combineReducers, configureStore } from '@reduxjs/toolkit'

// slice
import appReducer from './app/app.slice'
import headerReducer from './header/header.slice'
import drawerReducer from './drawer/drawer.slice'
import menuReducer from './menu/menu.slice'
import planReducer from './plan/plan.slice'
import periodReducer from './period/period.slice'
import cycleReducer from './cycle/cycle.slice'
import dayReducer from './day/day.slice'
import workoutReducer from './workout/workout.slice'
import exerciseReducer from './exercise/exercise.slice'

// service
import { userApi } from './user/user.service'
import { planApi } from './plan/plan.service'
import { periodApi } from './period/period.service'
import { cycleApi } from './cycle/cycle.service'
import { dayApi } from './day/day.service'
import { workoutApi } from './workout/workout.service'
import { exerciseApi } from './exercise/exercise.service'

const rootReducer = combineReducers({
  // slice
  app: appReducer,
  header: headerReducer,
  drawer: drawerReducer,
  menu: menuReducer,
  plan: planReducer,
  period: periodReducer,
  cycle: cycleReducer,
  day: dayReducer,
  workout: workoutReducer,
  exercise: exerciseReducer,

  // serivce
  [userApi.reducerPath]: userApi.reducer,
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

import { combineReducers, configureStore } from '@reduxjs/toolkit'

// slice
import appReducer from './app/app.slice'
import userReducer from './user/user.slice'
import headerReducer from './header/header.slice'
import navigationReducer from './navigation/navigation.slice'

// service
import { userApi } from './user/user.service'

const rootReducer = combineReducers({
  // slice
  app: appReducer,
  user: userReducer,
  header: headerReducer,
  navigation: navigationReducer,

  // serivce
  [userApi.reducerPath]: userApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
  })
}

export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

import { createSlice } from '@reduxjs/toolkit'

export type AppStateType = {
  userId: string
  currentWeek: string
  fixed: boolean
  user: {
    token: string | null
    login: string | null
    password: string | null
  }
}

const initialState: AppStateType = {
  userId: '',
  currentWeek: '',
  fixed: false,
  user: {
    token: localStorage.getItem('token') || null,
    login: localStorage.getItem('login') || null,
    password: localStorage.getItem('password') || null,
  },
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fix(state: AppStateType) {
      state.fixed = true
    },
    unpin(state: AppStateType) {
      state.fixed = false
    },
    updateUser(state: AppStateType, action: { payload: AppStateType['user'] }) {
      state.user = { ...state.user, ...action.payload }
    },
    setCurrentWeek(state: AppStateType, action: { payload: string }) {
      state.currentWeek = action.payload
    },
  },
})

export default appSlice.reducer

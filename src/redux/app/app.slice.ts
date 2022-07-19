import { createSlice } from '@reduxjs/toolkit'

export type AppStateType = {
  fixed: boolean
  user: {
    token: string
    login: string
    password: string
  }
}

const initialState: AppStateType = {
  fixed: false,
  user: {
    token: localStorage.getItem('token') || '',
    login: localStorage.getItem('login') || '',
    password: localStorage.getItem('password') || '',
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
  },
})

export default appSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export type AppStateType = {
  theme: 'dark' | 'light'
  positon: 'fixed' | 'scroll'
}

const initialState: AppStateType = {
  theme: 'dark',
  positon: 'scroll',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchTheme(state: AppStateType) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
    },
    changeToFixedPostion(state: AppStateType) {
      state.positon = 'fixed'
      document.body.style.overflow = 'hidden'
    },
    changeToScrollPostion(state: AppStateType) {
      state.positon = 'scroll'
      document.body.style.overflow = 'auto'
    },
  },
})

export default appSlice.reducer

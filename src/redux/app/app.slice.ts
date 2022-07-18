import { createSlice } from '@reduxjs/toolkit'

export type AppStateType = {
  fixed: boolean
}

const initialState: AppStateType = {
  fixed: false,
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
  },
})

export default appSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export type NavigationStateType = {
  visible: boolean
}

const initialState: NavigationStateType = {
  visible: false,
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    changeVisible(state: NavigationStateType) {
      state.visible = !state.visible
    },
    show(state: NavigationStateType) {
      state.visible = true
    },
    hide(state: NavigationStateType) {
      state.visible = false
    },
  },
})

export default navigationSlice.reducer

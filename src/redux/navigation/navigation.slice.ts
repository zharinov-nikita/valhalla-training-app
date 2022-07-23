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
    changeVisibleNavigation(state: NavigationStateType) {
      state.visible = !state.visible
    },
    showNavigation(state: NavigationStateType) {
      state.visible = true
    },
    hideNavigation(state: NavigationStateType) {
      state.visible = false
    },
  },
})

export default navigationSlice.reducer

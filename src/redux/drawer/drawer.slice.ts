import { createSlice } from '@reduxjs/toolkit'

export type DrawerStateType = {
  visible: boolean
}

const initialState: DrawerStateType = {
  visible: false,
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    changeVisible(state: DrawerStateType) {
      state.visible = !state.visible
    },
    show(state: DrawerStateType) {
      state.visible = true
    },
    hide(state: DrawerStateType) {
      state.visible = false
    },
  },
})

export default drawerSlice.reducer

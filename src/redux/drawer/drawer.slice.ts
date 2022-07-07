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
    show(state: DrawerStateType) {
      state.visible = true
    },
    hide(state: DrawerStateType) {
      state.visible = false
    },
  },
})

export const { show, hide } = drawerSlice.actions
export default drawerSlice.reducer

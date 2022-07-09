import { createSlice } from '@reduxjs/toolkit'

export type DrawerStateType = {
  action?: string
  visible: boolean
}

const initialState: DrawerStateType = {
  action: '',
  visible: false,
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    show(state: DrawerStateType, action: { payload: string }) {
      state.action = action.payload
      state.visible = true
    },
    hide(state: DrawerStateType) {
      state.visible = false
    },
  },
})

export const { show, hide } = drawerSlice.actions
export default drawerSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export type DrawerStateType = {
  visible: boolean
  components?: ReactNode | string
}

const initialState: DrawerStateType = {
  visible: false,
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    show(state: DrawerStateType, action: { payload: ReactNode }) {
      state.visible = true
      state.components = action.payload
    },
    hide(state: DrawerStateType) {
      state.visible = false
    },
  },
})

export const { show, hide } = drawerSlice.actions
export default drawerSlice.reducer

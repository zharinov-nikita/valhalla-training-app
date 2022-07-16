import { createSlice } from '@reduxjs/toolkit'

export type MenuStateType = {
  visible: boolean
}

const initialState: MenuStateType = {
  visible: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle(state: MenuStateType) {
      state.visible = !state.visible
    },
    show(state: MenuStateType) {
      state.visible = true
    },
    hide(state: MenuStateType) {
      state.visible = false
    },
  },
})

export const { show, hide } = menuSlice.actions
export default menuSlice.reducer

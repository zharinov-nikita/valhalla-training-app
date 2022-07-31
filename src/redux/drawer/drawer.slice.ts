import { createSlice } from '@reduxjs/toolkit'

export type DrawerStateType = {
  visible: boolean
  type: string
}

const initialState: DrawerStateType = {
  visible: false,
  type: '',
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    changeVisible(state: DrawerStateType) {
      state.visible = !state.visible
    },
    show(state: DrawerStateType, action: { payload: string }) {
      state.type = action.payload
      state.visible = true
    },
    hide(state: DrawerStateType) {
      state.visible = false
    },
  },
})

export default drawerSlice.reducer

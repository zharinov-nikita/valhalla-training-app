import { createSlice } from '@reduxjs/toolkit'

export type HeaderStateType = {
  title: string
}

const initialState: HeaderStateType = {
  title: '',
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateTitle(state: HeaderStateType, action: { payload: string }) {
      state.title = action.payload
    },
  },
})

export default headerSlice.reducer

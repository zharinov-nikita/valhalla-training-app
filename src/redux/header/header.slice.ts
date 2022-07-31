import { createSlice } from '@reduxjs/toolkit'

export type HeaderStateType = {
  title: string
}

const initialState: HeaderStateType = {
  title: 'Приложение',
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeTitle(state: HeaderStateType, action: { payload: string }) {
      state.title = action.payload
    },
  },
})

export default headerSlice.reducer

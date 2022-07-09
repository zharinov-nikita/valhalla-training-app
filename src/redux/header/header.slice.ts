import { createSlice } from '@reduxjs/toolkit'

export type DrawerStateType = {
  title: string
}

const initialState: DrawerStateType = {
  title: '',
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
})

export default headerSlice.reducer

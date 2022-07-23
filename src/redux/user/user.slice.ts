import { createSlice } from '@reduxjs/toolkit'

export type UserStateType = {
  isAuth: boolean
}

const initialState: UserStateType = {
  isAuth: true,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlice.reducer

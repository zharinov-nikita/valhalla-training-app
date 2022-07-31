import { createSlice } from '@reduxjs/toolkit'

export type UserStateType = {
  isAuth: boolean
  drawer: { key: string; value: string }
}

const initialState: UserStateType = {
  isAuth: true,
  drawer: {
    key: '',
    value: '',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeData(
      state: UserStateType,
      action: { payload: UserStateType['drawer'] }
    ) {
      state.drawer = { ...state.drawer, ...action.payload }
    },
  },
})

export default userSlice.reducer

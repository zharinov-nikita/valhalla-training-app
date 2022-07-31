import { createSlice } from '@reduxjs/toolkit'

export type UserStateType = {
  isAuth: boolean
  data: Array<{ key: string; value: string }>
}

const initialState: UserStateType = {
  isAuth: true,
  data: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeData(
      state: UserStateType,
      action: { payload: UserStateType['data'] }
    ) {
      state.data = { ...state.data, ...action.payload }
    },
  },
})

export default userSlice.reducer

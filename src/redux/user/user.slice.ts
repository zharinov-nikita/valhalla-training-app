import { createSlice } from '@reduxjs/toolkit'

export type UserStateType = {
  isAuth: boolean
  data: {
    _id: string
    firstname: string
    lastname: string
    role: string
    login: string
    password: string
  }
}

const initialState: UserStateType = {
  isAuth: true,
  data: {
    _id: '',
    firstname: '',
    lastname: '',
    role: '',
    login: '',
    password: '',
  },
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

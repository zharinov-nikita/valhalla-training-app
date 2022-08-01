import { createSlice } from '@reduxjs/toolkit'

export type UserStateType = {
  isAuth: boolean
  authData: {
    login: string
    password: string
  }
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
  isAuth:
    localStorage.getItem('login') && localStorage.getItem('password')
      ? true
      : false,
  authData: {
    login: localStorage.getItem('login') || '',
    password: localStorage.getItem('password') || '',
  },
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
    authorization(state: UserStateType, action: { payload: boolean }) {
      state.isAuth = action.payload
    },
    changeAuthData(
      state: UserStateType,
      action: { payload: UserStateType['authData'] }
    ) {
      state.authData = action.payload
    },
  },
})

export default userSlice.reducer

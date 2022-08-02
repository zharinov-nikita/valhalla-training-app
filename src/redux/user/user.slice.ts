import { createSlice } from '@reduxjs/toolkit'

export type UserStateType = {
  newLogin: string
  newPassword: string
  updateUser: {
    _id: string
    firstname: string
    lastname: string
    role: string
    login: string
    password: string
    plans: Array<string>
  }
}

export const initialState: UserStateType = {
  newLogin: '',
  newPassword: '',
  updateUser: {
    _id: '',
    firstname: '',
    lastname: '',
    role: '',
    login: '',
    password: '',
    plans: [],
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update(state: UserStateType, action: { payload: UserStateType['updateUser'] }) {
      state.updateUser = { ...state.updateUser, ...action.payload }
    },
    setNewLogin(state: UserStateType, action: { payload: string }) {
      state.newLogin = action.payload
    },
    setNewPassword(state: UserStateType, action: { payload: string }) {
      state.newPassword = action.payload
    },
  },
})

export default userSlice.reducer

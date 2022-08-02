import { createSlice } from '@reduxjs/toolkit'

export type UserStateType = {
  isAuth: boolean
  currentUser: {
    _id: string
    firstname: string
    lastname: string
    role: string
    login: string
    password: string
    plans: Array<string>
  }
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
  isAuth: false,
  currentUser: {
    _id: '',
    firstname: '',
    lastname: '',
    role: '',
    login: '',
    password: '',
    plans: [],
  },
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
    authorization(
      state: UserStateType,
      action: { payload: UserStateType['currentUser'] }
    ) {
      state.currentUser = action.payload
      state.isAuth = true
    },
    logout(state: UserStateType) {
      state.currentUser = initialState.currentUser
      state.isAuth = false
    },
    update(
      state: UserStateType,
      action: { payload: UserStateType['updateUser'] }
    ) {
      state.updateUser = { ...state.updateUser, ...action.payload }
    },
    updateCurrentUser(
      state: UserStateType,
      action: { payload: UserStateType['currentUser'] }
    ) {
      state.currentUser = action.payload
    },
  },
})

export default userSlice.reducer

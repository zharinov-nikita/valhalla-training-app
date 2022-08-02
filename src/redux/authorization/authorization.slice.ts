import { createSlice } from '@reduxjs/toolkit'

export type UserStateType = {
  isAuth: boolean
  navigate: '/registration' | '/authorization'
  currentUser: {
    _id: string
    firstname: string
    lastname: string
    role: string
    login: string
    password: string
    plans: Array<string>
  }
}

const isCurrentUser =
  localStorage.getItem('currentUser') ||
  JSON.stringify({
    _id: '',
    firstname: '',
    lastname: '',
    role: '',
    login: '',
    password: '',
    plans: [],
  })
const currentUser: UserStateType['currentUser'] = JSON.parse(isCurrentUser)
const isAuth = localStorage.getItem('currentUser') ? true : false
export const initialState: UserStateType = {
  isAuth,
  navigate: '/registration',
  currentUser,
}

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    authorization(
      state: UserStateType,
      action: { payload: UserStateType['currentUser'] }
    ) {
      localStorage.setItem('currentUser', JSON.stringify(action.payload))
      state.currentUser = action.payload
      state.isAuth = true
    },
    logout(state: UserStateType) {
      localStorage.removeItem('currentUser')
      state.navigate = '/authorization'
      state.currentUser = initialState.currentUser
      state.isAuth = false
    },
    updateCurrentUser(
      state: UserStateType,
      action: { payload: UserStateType['currentUser'] }
    ) {
      state.currentUser = action.payload
    },
  },
})

export default authorizationSlice.reducer

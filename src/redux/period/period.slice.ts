import { createSlice } from '@reduxjs/toolkit'

export type PlanStateType = {
  form: {
    title: string
    description: string
    start: string
    finish: string
    status: string
    planId: string
  }
}

const initialState: PlanStateType = {
  form: {
    title: '',
    description: '',
    start: '',
    finish: '',
    status: '',
    planId: '',
  },
}

export const periodSlice = createSlice({
  name: 'period',
  initialState,
  reducers: {
    updateForm(
      state: PlanStateType,
      action: { payload: PlanStateType['form'] }
    ) {
      state.form = { ...state.form, ...action.payload }
    },
  },
})

export const { updateForm } = periodSlice.actions
export default periodSlice.reducer

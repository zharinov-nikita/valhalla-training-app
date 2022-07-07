import { createSlice } from '@reduxjs/toolkit'

export type PeriodStateType = {
  form: {
    title: string
    description: string
    start: string
    finish: string
    status: string
    planId: string
  }
}

const initialState: PeriodStateType = {
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
      state: PeriodStateType,
      action: { payload: PeriodStateType['form'] }
    ) {
      state.form = { ...state.form, ...action.payload }
    },
    clearForm(state: PeriodStateType) {
      state.form = initialState.form
    },
  },
})

export const { updateForm } = periodSlice.actions
export default periodSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export type PlanStateType = {
  form: {
    action?: 'create' | 'update'
    title: string
    description: string
    start: string
    finish: string
    status: string
  }
}

const initialState: PlanStateType = {
  form: {
    title: '',
    description: '',
    start: '',
    finish: '',
    status: '',
  },
}

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    updateForm(
      state: PlanStateType,
      action: { payload: PlanStateType['form'] }
    ) {
      state.form = { ...state.form, ...action.payload }
    },
    clearForm(state: PlanStateType) {
      state.form = initialState.form
    },
  },
})

export const { updateForm } = planSlice.actions
export default planSlice.reducer

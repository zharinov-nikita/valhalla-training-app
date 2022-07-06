import { createSlice } from '@reduxjs/toolkit'

export type PlanStateType = {
  form: {
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
  },
})

export const { updateForm } = planSlice.actions
export default planSlice.reducer

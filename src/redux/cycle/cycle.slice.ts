import { createSlice } from '@reduxjs/toolkit'

export type CycleStateType = {
  form: {
    title: string
    description: string
    start: string
    finish: string
    status: string
    periodId: string
  }
}

const initialState: CycleStateType = {
  form: {
    title: '',
    description: '',
    start: '',
    finish: '',
    status: '',
    periodId: '',
  },
}

export const cycleSlice = createSlice({
  name: 'cycle',
  initialState,
  reducers: {
    updateForm(
      state: CycleStateType,
      action: { payload: CycleStateType['form'] }
    ) {
      state.form = { ...state.form, ...action.payload }
    },
    clearForm(state: CycleStateType) {
      state.form = initialState.form
    },
  },
})

export const { updateForm } = cycleSlice.actions
export default cycleSlice.reducer

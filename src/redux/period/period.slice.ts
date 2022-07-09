import { createSlice } from '@reduxjs/toolkit'

export type PeriodStateType = {
  formCreate: {
    title: string
    description: string
    start: string
    finish: string
    status: string
    planId: string
  }
  formUpdate: {
    _id: string
    title: string
    description: string
    start: string
    finish: string
    status: string
    planId: string
  }
}

const initialState: PeriodStateType = {
  formCreate: {
    title: '',
    description: '',
    start: '',
    finish: '',
    status: '',
    planId: '',
  },
  formUpdate: {
    _id: '',
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
    updateFormCreate(
      state: PeriodStateType,
      action: { payload: PeriodStateType['formCreate'] }
    ) {
      state.formCreate = { ...state.formCreate, ...action.payload }
    },
    clearFormCreate(state: PeriodStateType) {
      state.formCreate = initialState.formCreate
    },
    updateFormUpdate(
      state: PeriodStateType,
      action: { payload: PeriodStateType['formUpdate'] }
    ) {
      state.formUpdate = { ...state.formUpdate, ...action.payload }
    },
    clearFormUpdate(state: PeriodStateType) {
      state.formUpdate = initialState.formUpdate
    },
  },
})

export const {
  updateFormCreate,
  clearFormCreate,
  clearFormUpdate,
  updateFormUpdate,
} = periodSlice.actions
export default periodSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export type PeriodStateType = {
  formCreate: {
    title: string
    description: string
    start: string
    finish: string
    status: string
    periodId: string
  }
  formUpdate: {
    _id: string
    title: string
    description: string
    start: string
    finish: string
    status: string
    periodId: string
  }
}

const initialState: PeriodStateType = {
  formCreate: {
    title: '',
    description: '',
    start: '',
    finish: '',
    status: '',
    periodId: '',
  },
  formUpdate: {
    _id: '',
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
} = cycleSlice.actions
export default cycleSlice.reducer

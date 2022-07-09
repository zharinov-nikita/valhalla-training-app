import { createSlice } from '@reduxjs/toolkit'

export type CycleStateType = {
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

const initialState: CycleStateType = {
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
      state: CycleStateType,
      action: { payload: CycleStateType['formCreate'] }
    ) {
      state.formCreate = { ...state.formCreate, ...action.payload }
    },
    clearFormCreate(state: CycleStateType) {
      state.formCreate = initialState.formCreate
    },
    updateFormUpdate(
      state: CycleStateType,
      action: { payload: CycleStateType['formUpdate'] }
    ) {
      state.formUpdate = { ...state.formUpdate, ...action.payload }
    },
    clearFormUpdate(state: CycleStateType) {
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

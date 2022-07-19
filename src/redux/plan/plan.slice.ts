import { createSlice } from '@reduxjs/toolkit'

export type PlanStateType = {
  formCreate: {
    title: string
    description: string
    start: string
    finish: string
    status: string
    userId: string
  }
  formUpdate: {
    _id: string
    title: string
    description: string
    start: string
    finish: string
    status: string
    userId: string
  }
}

const initialState: PlanStateType = {
  formCreate: {
    title: '',
    description: '',
    start: '',
    finish: '',
    status: '',
    userId: '',
  },
  formUpdate: {
    _id: '',
    title: '',
    description: '',
    start: '',
    finish: '',
    status: '',
    userId: '',
  },
}

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    updateFormCreate(
      state: PlanStateType,
      action: { payload: PlanStateType['formCreate'] }
    ) {
      state.formCreate = { ...state.formCreate, ...action.payload }
    },
    clearFormCreate(state: PlanStateType) {
      state.formCreate = initialState.formCreate
    },
    updateFormUpdate(
      state: PlanStateType,
      action: { payload: PlanStateType['formUpdate'] }
    ) {
      state.formUpdate = { ...state.formUpdate, ...action.payload }
    },
    clearFormUpdate(state: PlanStateType) {
      state.formUpdate = initialState.formUpdate
    },
  },
})

export const {
  updateFormCreate,
  clearFormCreate,
  clearFormUpdate,
  updateFormUpdate,
} = planSlice.actions
export default planSlice.reducer

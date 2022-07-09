import { createSlice } from '@reduxjs/toolkit'

export type DayStateType = {
  formCreate: {
    title: string
    description: string
    status: string
    periodId: string
  }
  formUpdate: {
    _id: string
    title: string
    description: string
    status: string
    periodId: string
  }
}

const initialState: DayStateType = {
  formCreate: {
    title: '',
    description: '',
    status: '',
    periodId: '',
  },
  formUpdate: {
    _id: '',
    title: '',
    description: '',
    status: '',
    periodId: '',
  },
}

export const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    updateFormCreate(
      state: DayStateType,
      action: { payload: DayStateType['formCreate'] }
    ) {
      state.formCreate = { ...state.formCreate, ...action.payload }
    },
    clearFormCreate(state: DayStateType) {
      state.formCreate = initialState.formCreate
    },
    updateFormUpdate(
      state: DayStateType,
      action: { payload: DayStateType['formUpdate'] }
    ) {
      state.formUpdate = { ...state.formUpdate, ...action.payload }
    },
    clearFormUpdate(state: DayStateType) {
      state.formUpdate = initialState.formUpdate
    },
  },
})

export const {
  updateFormCreate,
  clearFormCreate,
  clearFormUpdate,
  updateFormUpdate,
} = daySlice.actions
export default daySlice.reducer

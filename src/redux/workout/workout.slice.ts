import { createSlice } from '@reduxjs/toolkit'

export type WorkoutStateType = {
  formCreate: {
    title: string
    description: string
    status: string
    dayId: string
  }
  formUpdate: {
    _id: string
    title: string
    description: string
    status: string
    dayId: string
  }
}

const initialState: WorkoutStateType = {
  formCreate: {
    title: '',
    description: '',
    status: '',
    dayId: '',
  },
  formUpdate: {
    _id: '',
    title: '',
    description: '',
    status: '',
    dayId: '',
  },
}

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    updateFormCreate(
      state: WorkoutStateType,
      action: { payload: WorkoutStateType['formCreate'] }
    ) {
      state.formCreate = { ...state.formCreate, ...action.payload }
    },
    clearFormCreate(state: WorkoutStateType) {
      state.formCreate = initialState.formCreate
    },
    updateFormUpdate(
      state: WorkoutStateType,
      action: { payload: WorkoutStateType['formUpdate'] }
    ) {
      state.formUpdate = { ...state.formUpdate, ...action.payload }
    },
    clearFormUpdate(state: WorkoutStateType) {
      state.formUpdate = initialState.formUpdate
    },
  },
})

export const {
  updateFormCreate,
  clearFormCreate,
  clearFormUpdate,
  updateFormUpdate,
} = workoutSlice.actions
export default workoutSlice.reducer

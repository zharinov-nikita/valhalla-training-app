import { createSlice } from '@reduxjs/toolkit'

export type ExerciseStateType = {
  formCreate: {
    title: string
    description: string
    status: string
    option?: Array<{ id: number; title: string; value: string }>
    workoutId: string
  }
  formUpdate: {
    _id: string
    title: string
    description: string
    status: string
    option?: Array<{ id: number; title: string; value: string }>
    workoutId: string
  }
}

const initialState: ExerciseStateType = {
  formCreate: {
    title: '',
    description: '',
    status: '',
    option: [],
    workoutId: '',
  },
  formUpdate: {
    _id: '',
    title: '',
    description: '',
    status: '',
    option: [],
    workoutId: '',
  },
}

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    updateFormCreate(
      state: ExerciseStateType,
      action: { payload: ExerciseStateType['formCreate'] }
    ) {
      state.formCreate = { ...state.formCreate, ...action.payload }
    },
    clearFormCreate(state: ExerciseStateType) {
      state.formCreate = initialState.formCreate
    },
    updateFormUpdate(
      state: ExerciseStateType,
      action: { payload: ExerciseStateType['formUpdate'] }
    ) {
      state.formUpdate = { ...state.formUpdate, ...action.payload }
    },
    clearFormUpdate(state: ExerciseStateType) {
      state.formUpdate = initialState.formUpdate
    },
  },
})

export const {
  updateFormCreate,
  clearFormCreate,
  clearFormUpdate,
  updateFormUpdate,
} = exerciseSlice.actions
export default exerciseSlice.reducer

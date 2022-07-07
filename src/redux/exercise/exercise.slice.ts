import { createSlice } from '@reduxjs/toolkit'

export type ExerciseStateType = {
  form: {
    option: Array<{ id: number; title: string; value: string }>
  }
}

const initialState: ExerciseStateType = {
  form: {
    option: [],
  },
}

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    addOptionForm(
      state: ExerciseStateType,
      action: { payload: { id: number; title: string; value: string } }
    ) {
      state.form.option.push(action.payload)
    },
    deleteOptionForm(
      state: ExerciseStateType,
      action: { payload: { id: number; title: string; value: string } }
    ) {
      state.form.option = state.form.option.filter(
        (option) => option.id !== action.payload.id
      )
    },
    updateOptionForm(
      state: ExerciseStateType,
      action: { payload: { id: number; title: string; value: string } }
    ) {
      state.form.option = state.form.option.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...action.payload }
        }
        return item
      })
    },
  },
})

export const { updateOptionForm, addOptionForm, deleteOptionForm } =
  exerciseSlice.actions
export default exerciseSlice.reducer

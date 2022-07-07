import { createSlice } from '@reduxjs/toolkit'

export type ExerciseStateType = {
  form: {
    option: Array<{ id: number; title: string; value: string }>
  }
}

const initialState: ExerciseStateType = {
  form: {
    option: [
      { id: 1, title: 'title', value: 'value' },
      { id: 2, title: 'title', value: 'value' },
    ],
  },
}

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
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

export const { updateOptionForm } = exerciseSlice.actions
export default exerciseSlice.reducer

import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Drawer from '../../../components/Drawer/Drawer'
import Input from '../../../components/Input/Input'
import InputGroop from '../../../components/InputGroop/InputGroop'
import List from '../../../components/List/List'
import Textarea from '../../../components/Textarea/Textarea'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { drawerSlice } from '../../../redux/drawer/drawer.slice'
import { useCreateMutation } from '../../../redux/exercise/exercise.service'
import { exerciseSlice } from '../../../redux/exercise/exercise.slice'

const ExerciseDrawer: FC = () => {
  const { search } = useLocation()
  const workoutId = search.split('workoutId=')[1]

  const [create, { isSuccess }] = useCreateMutation()
  const dispatch = useAppDispatch()
  const { form } = useAppSelector((state) => state.exercise)
  const { updateOptionForm } = exerciseSlice.actions
  const { hide } = drawerSlice.actions

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   dispatch(updateForm({ ...form, [e.target.name]: e.currentTarget.value }))

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(hide())
  //     dispatch(clearForm())
  //   }
  // }, [isSuccess])

  return (
    <Drawer>
      <List props={{ gap: 12 }}>
        {form.option.map((item) => (
          <InputGroop key={item.id}>
            <input
              value={item.title}
              onChange={(e) =>
                dispatch(updateOptionForm({ ...item, title: e.target.value }))
              }
            />
            <input
              value={item.value}
              onChange={(e) =>
                dispatch(updateOptionForm({ ...item, value: e.target.value }))
              }
            />
          </InputGroop>
        ))}
      </List>
    </Drawer>
  )
}

export default ExerciseDrawer

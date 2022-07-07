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
  const { updateForm, clearForm, addOptionForm, deleteOptionForm } =
    exerciseSlice.actions
  const { hide } = drawerSlice.actions

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateForm({ ...form, [e.target.name]: e.currentTarget.value }))

  useEffect(() => {
    if (isSuccess) {
      dispatch(hide())
      dispatch(clearForm())
    }
  }, [isSuccess])

  return (
    <Drawer>
      <List props={{ gap: 12 }}>
        {form.option.map((option) => (
          <InputGroop key={option.id}>
            <Button
              props={{
                text: 'Удалить',
                onClick: () => dispatch(deleteOptionForm(option)),
              }}
            />
          </InputGroop>
        ))}
        <Button
          props={{
            text: 'Добавить параметры',
            block: true,
            onClick: () =>
              dispatch(
                addOptionForm({ id: Number(Date.now()), title: '', value: '' })
              ),
          }}
        />
        <Button
          props={{
            text: 'Сохранить тренировку',
            block: true,
            onClick: () => create({ ...form, workoutId }),
          }}
        />
      </List>
    </Drawer>
  )
}

export default ExerciseDrawer

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
import { useCreateMutation } from '../../../redux/workout/workout.service'
import { workoutSlice } from '../../../redux/workout/workout.slice'

type ItemFormType = {
  id: number
  component: 'input' | 'textarea'
  name: string
  value: string
  placeholder: string
}

const ExerciseDrawer: FC = () => {
  const { search } = useLocation()
  const dayId = search.split('dayId=')[1]

  const [create, { isSuccess }] = useCreateMutation()
  const dispatch = useAppDispatch()
  const { form } = useAppSelector((state) => state.workout)
  const { updateForm, clearForm } = workoutSlice.actions
  const { hide } = drawerSlice.actions

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateForm({ ...form, [e.target.name]: e.currentTarget.value }))

  const data: ItemFormType[] = [
    {
      id: 1,
      component: 'input',
      name: 'title',
      placeholder: 'Название',
      value: form.title,
    },
    {
      id: 2,
      component: 'textarea',
      name: 'description',
      placeholder: 'Описание',
      value: form.description,
    },
    {
      id: 3,
      component: 'input',
      name: 'status',
      placeholder: 'Статус',
      value: form.status,
    },
  ]

  useEffect(() => {
    if (isSuccess) {
      dispatch(hide())
      dispatch(clearForm())
    }
  }, [isSuccess])

  return (
    <Drawer>
      <List props={{ gap: 12 }}>
        <InputGroop></InputGroop>
        <Button props={{ text: 'Добавить параметры', block: true }} />
        <Button
          props={{
            text: 'Сохранить тренировку',
            block: true,
            onClick: () => create({ ...form, dayId }),
          }}
        />
      </List>
    </Drawer>
  )
}

export default ExerciseDrawer

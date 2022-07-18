import React, { FC, useEffect } from 'react'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import List from '../../../../components/List/List'
import Textarea from '../../../../components/Textarea/Textarea'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { useForm } from '../../../../hooks/useForm'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'
import { appSlice } from '../../../../redux/app/app.slice'
import { useFindByIdAndUpdateMutation } from '../../../../redux/workout/workout.service'
import { workoutSlice } from '../../../../redux/workout/workout.slice'

type ItemFormType = {
  id: number
  component: 'input' | 'textarea'
  name: string
  value: string
  placeholder: string
}

const DrawerUpdate: FC = () => {
  const [update, { isSuccess }] = useFindByIdAndUpdateMutation()
  const dispatch = useAppDispatch()
  const { formUpdate } = useAppSelector((state) => state.workout)
  const { updateFormUpdate, clearFormUpdate } = workoutSlice.actions
  const { hide } = drawerSlice.actions

  const { title, description, status } = formUpdate
  const { disabled } = useForm([title, description, status])
  const { unpin } = appSlice.actions

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      updateFormUpdate({
        ...formUpdate,
        [e.target.name]: e.currentTarget.value,
      })
    )

  const data: ItemFormType[] = [
    {
      id: 1,
      component: 'input',
      name: 'title',
      placeholder: 'Название',
      value: formUpdate.title,
    },
    {
      id: 2,
      component: 'textarea',
      name: 'description',
      placeholder: 'Описание',
      value: formUpdate.description,
    },
    {
      id: 3,
      component: 'input',
      name: 'status',
      placeholder: 'Статус',
      value: formUpdate.status,
    },
  ]

  useEffect(() => {
    if (isSuccess) {
      dispatch(hide())
      dispatch(clearFormUpdate())
    }
  }, [isSuccess])

  return (
    <List props={{ gap: 12 }}>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {item.component === 'input' && (
            <Input
              props={{
                name: item.name,
                value: item.value,
                placeholder: item.placeholder,
                onChange,
              }}
            />
          )}
          {item.component === 'textarea' && (
            <Textarea
              props={{
                name: item.name,
                value: item.value,
                placeholder: item.placeholder,
                onChange,
              }}
            />
          )}
        </React.Fragment>
      ))}
      <Button
        props={{
          text: 'Обновить тренировку',
          block: true,
          disabled,
          type: 'warning',
          onClick: () => {
            update(formUpdate)
            dispatch(unpin())
          },
        }}
      />
    </List>
  )
}

export default DrawerUpdate

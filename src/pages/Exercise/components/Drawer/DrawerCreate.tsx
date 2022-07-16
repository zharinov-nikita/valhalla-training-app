import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import InputGroop from '../../../../components/InputGroop/InputGroop'
import List from '../../../../components/List/List'
import Textarea from '../../../../components/Textarea/Textarea'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { useForm } from '../../../../hooks/useForm'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'
import { useCreateMutation } from '../../../../redux/exercise/exercise.service'
import { exerciseSlice } from '../../../../redux/exercise/exercise.slice'

const DrawerCreate: FC = () => {
  const { search } = useLocation()
  const workoutId = search.split('workoutId=')[1]

  const [create, { isSuccess }] = useCreateMutation()
  const dispatch = useAppDispatch()
  const { formCreate } = useAppSelector((state) => state.exercise)
  const {
    updateFormCreate,
    clearFormCreate,
    updateOptionFormCreate,
    deleteOptionFormCreate,
    addOptionFormCreate,
  } = exerciseSlice.actions
  const { hide } = drawerSlice.actions

  const { title, description, status } = formCreate
  const options = formCreate.option.map((item) => {
    return item.title, item.value
  })
  const { disabled } = useForm([title, description, status, ...options])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      updateFormCreate({
        ...formCreate,
        [e.target.name]: e.currentTarget.value,
      })
    )

  useEffect(() => {
    if (isSuccess) {
      dispatch(hide())
      dispatch(clearFormCreate())
    }
  }, [isSuccess])

  return (
    <List props={{ gap: 12 }}>
      <Input
        props={{
          name: 'title',
          placeholder: 'Название',
          value: formCreate.title,
          onChange,
        }}
      />

      <Textarea
        props={{
          name: 'description',
          placeholder: 'Описание',
          value: formCreate.description,
          onChange,
        }}
      />

      <Input
        props={{
          name: 'status',
          placeholder: 'Статус',
          value: formCreate.status,
          onChange,
        }}
      />

      {formCreate.option.map((item) => (
        <InputGroop key={item.id}>
          <Input
            props={{
              name: 'title',
              value: item.title,
              placeholder: 'Параметр',
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  updateOptionFormCreate({
                    ...item,
                    title: e.currentTarget.value,
                  })
                ),
            }}
          />
          <Input
            props={{
              name: 'value',
              value: item.value,
              placeholder: 'Значение',
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  updateOptionFormCreate({
                    ...item,
                    value: e.currentTarget.value,
                  })
                ),
            }}
          />
          <Button
            props={{
              text: 'Удалить',
              onClick: () => dispatch(deleteOptionFormCreate(item)),
            }}
          />
        </InputGroop>
      ))}

      <Button
        props={{
          text: 'Добавить параметр',
          block: true,
          onClick: () =>
            dispatch(
              addOptionFormCreate({
                id: Number(Date.now()),
                title: '',
                value: '',
              })
            ),
        }}
      />

      <Button
        props={{
          text: 'Создать упражнение',
          block: true,
          disabled,
          onClick: () => create({ ...formCreate, workoutId }),
        }}
      />
    </List>
  )
}

export default DrawerCreate

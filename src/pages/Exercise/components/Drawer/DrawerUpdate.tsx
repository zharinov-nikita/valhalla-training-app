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
import { useFindByIdAndUpdateMutation } from '../../../../redux/exercise/exercise.service'
import { exerciseSlice } from '../../../../redux/exercise/exercise.slice'

const DrawerUpdate: FC = () => {
  const { search } = useLocation()
  const workoutId = search.split('workoutId=')[1]

  const [update, { isSuccess }] = useFindByIdAndUpdateMutation()
  const dispatch = useAppDispatch()

  const { formUpdate } = useAppSelector((state) => state.exercise)
  const {
    updateFormUpdate,
    clearFormUpdate,
    updateOptionFormUpdate,
    deleteOptionFormUpdate,
    addOptionFormUpdate,
  } = exerciseSlice.actions
  const { hide } = drawerSlice.actions

  const { title, description, status } = formUpdate
  const options = formUpdate.option.map((item) => {
    return item.title, item.value
  })
  const { disabled } = useForm([title, description, status, ...options])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      updateFormUpdate({
        ...formUpdate,
        [e.target.name]: e.currentTarget.value,
      })
    )

  useEffect(() => {
    if (isSuccess) {
      dispatch(hide())
      dispatch(clearFormUpdate())
    }
  }, [isSuccess])

  return (
    <List props={{ gap: 12 }}>
      <Input
        props={{
          name: 'title',
          placeholder: 'Название',
          value: formUpdate.title,
          onChange,
        }}
      />

      <Textarea
        props={{
          name: 'description',
          placeholder: 'Описание',
          value: formUpdate.description,
          onChange,
        }}
      />

      <Input
        props={{
          name: 'status',
          placeholder: 'Статус',
          value: formUpdate.status,
          onChange,
        }}
      />

      {formUpdate.option.map((item) => (
        <InputGroop key={item.id}>
          <Input
            props={{
              name: 'title',
              value: item.title,
              placeholder: 'Параметр',
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(
                  updateOptionFormUpdate({
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
                  updateOptionFormUpdate({
                    ...item,
                    value: e.currentTarget.value,
                  })
                ),
            }}
          />
          <Button
            props={{
              text: 'Удалить',
              onClick: () => dispatch(deleteOptionFormUpdate(item)),
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
              addOptionFormUpdate({
                id: Number(Date.now()),
                title: '',
                value: '',
              })
            ),
        }}
      />

      <Button
        props={{
          text: 'Обновить упражнение',
          block: true,
          disabled,
          onClick: () => update({ ...formUpdate, workoutId }),
        }}
      />
    </List>
  )
}

export default DrawerUpdate

import React, { FC, useEffect } from 'react'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import List from '../../../../components/List/List'
import Textarea from '../../../../components/Textarea/Textarea'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'
import { useFindByIdAndUpdateMutation } from '../../../../redux/exercise/exercise.service'
import { exerciseSlice } from '../../../../redux/exercise/exercise.slice'

const DrawerUpdate: FC = () => {
  const [update, { isSuccess }] = useFindByIdAndUpdateMutation()
  const dispatch = useAppDispatch()
  const { formUpdate } = useAppSelector((state) => state.exercise)
  const { updateFormUpdate, clearFormUpdate } = exerciseSlice.actions
  const { hide } = drawerSlice.actions

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
      <Button
        props={{
          text: 'Обновить тренировку',
          block: true,
          onClick: () => update(formUpdate),
        }}
      />
    </List>
  )
}

export default DrawerUpdate

import React, { FC, useEffect } from 'react'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import List from '../../../../components/List/List'
import Textarea from '../../../../components/Textarea/Textarea'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { drawerSlice } from '../../../../redux/drawer/drawer.slice'
import { useCreateMutation } from '../../../../redux/plan/plan.service'
import { planSlice } from '../../../../redux/plan/plan.slice'

type ItemFormType = {
  id: number
  component: 'input' | 'textarea'
  name: string
  value: string
  placeholder: string
}

const DrawerCreate: FC = () => {
  const [create, { isSuccess }] = useCreateMutation()
  const dispatch = useAppDispatch()
  const { formCreate } = useAppSelector((state) => state.plan)
  const { updateFormCreate, clearFormCreate } = planSlice.actions
  const { hide } = drawerSlice.actions

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      updateFormCreate({
        ...formCreate,
        [e.target.name]: e.currentTarget.value,
      })
    )

  const data: ItemFormType[] = [
    {
      id: 1,
      component: 'input',
      name: 'title',
      placeholder: 'Название',
      value: formCreate.title,
    },
    {
      id: 2,
      component: 'textarea',
      name: 'description',
      placeholder: 'Описание',
      value: formCreate.description,
    },
    {
      id: 3,
      component: 'input',
      name: 'start',
      placeholder: 'Начало',
      value: formCreate.start,
    },
    {
      id: 4,
      component: 'input',
      name: 'finish',
      placeholder: 'Конец',
      value: formCreate.finish,
    },
    {
      id: 5,
      component: 'input',
      name: 'status',
      placeholder: 'Статус',
      value: formCreate.status,
    },
  ]

  useEffect(() => {
    if (isSuccess) {
      dispatch(hide())
      dispatch(clearFormCreate())
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
          text: 'Создать период',
          block: true,
          onClick: () => create(formCreate),
        }}
      />
    </List>
  )
}

export default DrawerCreate

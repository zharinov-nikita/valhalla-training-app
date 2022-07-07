import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Drawer from '../../../components/Drawer/Drawer'
import Input from '../../../components/Input/Input'
import Textarea from '../../../components/Textarea/Textarea'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { drawerSlice } from '../../../redux/drawer/drawer.slice'
import { useCreateMutation } from '../../../redux/period/period.service'
import { periodSlice } from '../../../redux/period/period.slice'

type ItemFormType = {
  id: number
  component: 'input' | 'textarea'
  name: string
  value: string
  placeholder: string
}

const PeriodDrawer: FC = () => {
  const { search } = useLocation()
  const planId = search.split('planId=')[1]

  const [create, { isSuccess }] = useCreateMutation()
  const dispatch = useAppDispatch()
  const { form } = useAppSelector((state) => state.period)
  const { updateForm, clearForm } = periodSlice.actions
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
      name: 'start',
      placeholder: 'Начало',
      value: form.start,
    },
    {
      id: 4,
      component: 'input',
      name: 'finish',
      placeholder: 'Конец',
      value: form.finish,
    },
    {
      id: 5,
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
    <Drawer
      props={{
        children: (
          <>
            {data.map((item) => (
              <div key={item.id}>
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
              </div>
            ))}
            <Button
              props={{
                text: 'Сохранить период',
                block: true,
                onClick: () => create({ ...form, planId }),
              }}
            />
          </>
        ),
      }}
    />
  )
}

export default PeriodDrawer

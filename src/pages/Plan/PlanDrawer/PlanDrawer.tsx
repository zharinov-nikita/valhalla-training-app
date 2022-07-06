import React, { FC, useEffect } from 'react'
import Button from '../../../components/Button/Button'
import Drawer from '../../../components/Drawer/Drawer'
import Input from '../../../components/Input/Input'
import Textarea from '../../../components/Textarea/Textarea'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { drawerSlice } from '../../../redux/drawer/drawer.slice'
import { useCreateMutation } from '../../../redux/plan/plan.service'
import { planSlice } from '../../../redux/plan/plan.slice'

type ItemFormType = {
  component: 'input' | 'textarea'
  name: string
  value: string
  placeholder: string
}

const PlanDrawer: FC = () => {
  const [create, { isSuccess }] = useCreateMutation()
  const dispatch = useAppDispatch()
  const { form } = useAppSelector((state) => state.plan)
  const { updateForm } = planSlice.actions
  const { hide } = drawerSlice.actions

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateForm({ ...form, [e.target.name]: e.currentTarget.value }))

  const data: ItemFormType[] = [
    {
      component: 'input',
      name: 'title',
      placeholder: 'Название',
      value: form.title,
    },
    {
      component: 'textarea',
      name: 'description',
      placeholder: 'Описание',
      value: form.description,
    },
    {
      component: 'input',
      name: 'start',
      placeholder: 'Начало',
      value: form.start,
    },
    {
      component: 'input',
      name: 'finish',
      placeholder: 'Конец',
      value: form.finish,
    },
    {
      component: 'input',
      name: 'status',
      placeholder: 'Статус',
      value: form.status,
    },
  ]

  useEffect(() => {
    if (isSuccess) {
      dispatch(hide())
    }
  }, [isSuccess])

  return (
    <Drawer
      props={{
        children: (
          <>
            {data.map((item) => (
              <>
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
              </>
            ))}
            <Button
              props={{
                text: 'Сохранить план',
                block: true,
                onClick: () => create(form),
              }}
            />
          </>
        ),
      }}
    />
  )
}

export default PlanDrawer

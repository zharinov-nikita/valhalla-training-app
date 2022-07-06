import { FC } from 'react'
import Button from '../../../components/Button/Button'
import Drawer from '../../../components/Drawer/Drawer'
import Input from '../../../components/Input/Input'
import Textarea from '../../../components/Textarea/Textarea'

const WorkoutDrawer: FC = () => {
  return (
    <Drawer
      props={{
        children: (
          <>
            <Input
              props={{ name: 'title', placeholder: 'Название', value: '' }}
            />
            <Textarea
              props={{
                name: 'description',
                placeholder: 'Описание',
                value: '',
              }}
            />
            <Input
              props={{
                name: 'status',
                placeholder: 'Начало',
                value: 'Запланировано',
              }}
            />
            <Button props={{ text: 'Сохранить план', block: true }} />
          </>
        ),
      }}
    />
  )
}

export default WorkoutDrawer

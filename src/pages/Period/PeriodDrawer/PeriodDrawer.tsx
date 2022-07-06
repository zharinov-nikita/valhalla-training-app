import { FC } from 'react'
import Button from '../../../components/Button/Button'
import Drawer from '../../../components/Drawer/Drawer'
import Input from '../../../components/Input/Input'
import Textarea from '../../../components/Textarea/Textarea'

const PeriodDrawer: FC = () => {
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
                name: 'start',
                placeholder: 'Начало',
                value: '01.01.2021',
              }}
            />
            <Input
              props={{
                name: 'finish',
                placeholder: 'Конец',
                value: '02.02.2022',
              }}
            />
            <Input
              props={{
                name: 'status',
                placeholder: 'Начало',
                value: 'Запланировано',
              }}
            />
            <Button props={{ text: 'Сохранить период', block: true }} />
          </>
        ),
      }}
    />
  )
}

export default PeriodDrawer

import { FC } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import List from '../../components/List/List'

const Registration: FC = () => {
  return (
    <List gap={12}>
      <Input placeholder="Рагнар" value="" label="Имя" />
      <Input placeholder="Лодброк" value="" label="Фамилия" />
      <Input placeholder="Спортсмен" value="" label="Роль" />
      <Input placeholder="ragnar_lodbrock" value="" label="Логин" />
      <Input placeholder="UEk4ujEt" value="" label="Пароль" />
      <Button
        size="medium"
        block={true}
        text="Зарегистрироваться"
        color={{ type: 'fill', value: 'purple' }}
      />
    </List>
  )
}

export default Registration

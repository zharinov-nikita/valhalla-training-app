import { FC } from 'react'
import Item from './components/Item/Item'
import style from './Setting.module.scss'

const Setting: FC = () => {
  return (
    <div className={style.setting}>
      <Item
        props={{
          title: 'Тема',
          description: 'Включите данную опцию для включени темной темы',
          checked: false,
        }}
      />
      <Item
        props={{
          title: 'Редактирование',
          description: 'Включите данную опцию для включени темной темы',
          checked: true,
        }}
      />
      <Item
        props={{
          title: 'Удаление',
          description: 'Включите данную опцию для включени темной темы',
          checked: false,
        }}
      />
    </div>
  )
}

export default Setting

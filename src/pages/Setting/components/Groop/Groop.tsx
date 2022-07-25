import { FC } from 'react'
import Item from '../Item/Item'
import style from './Groop.module.scss'

export type GroopPropsType = {}

const Groop: FC<GroopPropsType> = () => {
  return (
    <div className={style.groop}>
      <Item
        props={{
          title: 'Тема',
          description: 'Включите данную опцию для включени темной темы',
          checked: false,
        }}
        className={style.item}
      />
      <Item
        props={{
          title: 'Редактирование',
          description: 'Включите данную опцию для включени темной темы',
          checked: true,
        }}
        className={style.item}
      />
      <Item
        props={{
          title: 'Удаление',
          description: 'Включите данную опцию для включени темной темы',
          checked: false,
        }}
        className={style.item}
      />
    </div>
  )
}

export default Groop

import { FC } from 'react'
import { useAppDispatch } from '../../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../../hooks/store/useAppSelector'
import { appSlice } from '../../../../redux/app/app.slice'
import Groop from '../Groop/Groop'
import Item from '../Item/Item'
import style from './List.module.scss'

export type ListPropsType = {}

const List: FC<ListPropsType> = () => {
  const dispatch = useAppDispatch()
  const { switchTheme } = appSlice.actions
  const { theme } = useAppSelector((state) => state.app)
  return (
    <div className={style.list}>
      <Item
        props={{
          title: `Тема`,
          description: `Настройка темы. Сейчас установлена ${
            theme === 'dark' ? 'темная' : 'светлая'
          } тема`,
          checked: theme === 'dark' ? true : false,
        }}
        className={style.item}
        onClick={() => dispatch(switchTheme())}
      />
    </div>
  )
}

export default List

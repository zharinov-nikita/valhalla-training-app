import { FC } from 'react'
import Groop from './components/Groop/Groop'
import Item from './components/Item/Item'
import style from './Setting.module.scss'

const Setting: FC = () => {
  return (
    <div className={style.setting}>
      <Groop />
    </div>
  )
}

export default Setting

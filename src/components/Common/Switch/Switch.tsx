import { FC, MouseEventHandler } from 'react'
import style from './Switch.module.scss'

export type SwitchPropsType = {
  props: {
    checked: boolean
  }
  onClick?: MouseEventHandler
}

const Switch: FC<SwitchPropsType> = ({ props, onClick }) => {
  return (
    <div
      className={style.switch}
      data-checked={props.checked}
      onClick={onClick}
    >
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.circle}></div>
        </div>
      </div>
    </div>
  )
}

export default Switch

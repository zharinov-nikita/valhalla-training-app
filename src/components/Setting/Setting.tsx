import { FC } from 'react'
import Switch from '../Switch/Switch'
import style from './Setting.module.scss'

export type SettingPropsType = {
  props: Array<{ id: number | string; title: string; description: string }>
}

const Setting: FC<SettingPropsType> = ({ props }) => {
  return (
    <div
      className={style.setting}
      data-type={props.length > 1 ? 'groop' : 'item'}
    >
      {props.map(({ id, title, description }) => (
        <div className={style.item} key={id}>
          <div className={style.left}>
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
          </div>
          <div className={style.right}>
            <Switch props={{ checked: false }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Setting

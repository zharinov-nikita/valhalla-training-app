import { FC, ReactNode } from 'react'
import style from './Setting.module.scss'

export type SettingPropsType = {
  props: Array<{
    id: number | string
    before?: ReactNode
    after?: ReactNode
    title: string
    description?: string
  }>
}

const Setting: FC<SettingPropsType> = ({ props }) => {
  return (
    <div
      className={style.setting}
      data-type={props.length > 1 ? 'groop' : 'item'}
    >
      {props.map(({ id, title, description, before, after }) => (
        <div
          className={style.item}
          key={id}
          data-before={before ? true : false}
        >
          {before ? (
            <div className={style.left}>
              {before}
              <div className={style.info}>
                <div className={style.title}>{title}</div>
                {description && (
                  <div className={style.description}>{description}</div>
                )}
              </div>
            </div>
          ) : (
            <div className={style.left}>
              <div className={style.title}>{title}</div>
              <div className={style.description}>{description}</div>
            </div>
          )}
          <div className={style.right}>{after}</div>
        </div>
      ))}
    </div>
  )
}

export default Setting

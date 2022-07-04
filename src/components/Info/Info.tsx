import { FC } from 'react'
import Status from '../Status/Status'
import css from './Info.module.scss'

export type InfoPropsType = {
  props: {
    status: string
    title: string
    description: string
    progress: number | string
  }
}

const Info: FC<InfoPropsType> = ({ props }) => {
  return (
    <div className={css.info}>
      <div className={css.left}>
        <div className={css.icon}></div>
      </div>
      <div className={css.right}>
        <div className={css.header}>
          <div className={css.title}>{props.title}</div>
          <Status props={{ text: props.status }} />
        </div>
        <div className={css.body}>
          <div className={css.description}>{props.description}</div>
        </div>
        <div className={css.footer}>
          <div className={css.progress}>
            <div
              className={css.placeholder}
              style={{ width: `${props.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info

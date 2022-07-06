import { FC, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import Status from '../Status/Status'
import css from './Info.module.scss'

export type InfoPropsType = {
  props: {
    to?: string
    status: string
    title: string
    description: string
    progress: number | string
    onClick?: MouseEventHandler
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
          {props.to ? (
            <Link to={props.to} className={css.title}>
              {props.title}
            </Link>
          ) : (
            <div className={css.title}>{props.title}</div>
          )}
          <Status props={{ text: props.status, onClick: props.onClick }} />
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

import { DeleteOutlined, HolderOutlined } from '@ant-design/icons'
import { FC, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Status from '../Status/Status'
import css from './Info.module.scss'

export type InfoPropsType = {
  props: {
    to?: string
    status: string
    title: string
    counter?: number
    description: string
    progress: number | string
    onClickStatus?: MouseEventHandler
    onClickDrawer?: MouseEventHandler
    onClickDelete?: MouseEventHandler
  }
}

const Info: FC<InfoPropsType> = ({ props }) => {
  return (
    <div className={css.info}>
      <div className={css.right}>
        <div className={css.header}>
          <div className={css.header__left}>
            {props.to ? (
              <Link to={props.to} className={css.title}>
                {props.title}
              </Link>
            ) : (
              <div className={css.title}>
                {props.title}
                {/* <span>{props.counter && Number(props.counter)}</span> */}
              </div>
            )}
          </div>
          <div className={css.header__right}>
            <Status
              props={{ text: props.status, onClick: props.onClickStatus }}
            />
            <Button
              props={{
                icon: <HolderOutlined />,
                size: 'small',
                type: 'secondary',
                onClick: props.onClickDrawer,
              }}
            />
            <Button
              props={{
                icon: <DeleteOutlined />,
                size: 'small',
                type: 'secondary',
                onClick: props.onClickDelete,
                disabled: false,
              }}
            />
          </div>
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

import { FC, MouseEventHandler, ReactNode } from 'react'
import style from './Tag.module.scss'

export type TagPropsType = {
  props: {
    text: string | ReactNode
    color?: {
      type: 'fill' | 'transparent'
      value: 'purple' | 'green' | 'red' | 'yellow'
    }
    size: 'small' | 'medium'
    border?: 'solid'
  }

  onClick?: MouseEventHandler
}

const Tag: FC<TagPropsType> = ({ props, onClick }) => {
  return (
    <div
      className={style.tag}
      data-color-value={props.color?.value}
      data-color-type={props.color?.type}
      data-size={props.size}
      data-border={props.border}
      onClick={onClick}
    >
      {props.text}
    </div>
  )
}

export default Tag

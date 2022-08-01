import { FC, MouseEventHandler, ReactNode } from 'react'
import style from './Tag.module.scss'

export type TagPropsType = {
  text: string | ReactNode
  color?: {
    type: 'fill' | 'transparent'
    value: 'purple' | 'green' | 'red' | 'yellow'
  }
  size: 'small' | 'medium'
  border?: 'solid'

  onClick?: MouseEventHandler
}

const Tag: FC<TagPropsType> = ({ text, color, size, border, onClick }) => {
  return (
    <div
      className={style.tag}
      data-color-value={color?.value}
      data-color-type={color?.type}
      data-size={size}
      data-border={border}
      onClick={onClick}
    >
      {text}
    </div>
  )
}

export default Tag

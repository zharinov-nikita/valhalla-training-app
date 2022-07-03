import { FieldTimeOutlined } from '@ant-design/icons'
import { FC, ReactNode } from 'react'
import css from './Tag.module.scss'

export type TagPropsType = {
  option: {
    id?: number
    color?: 'yellow' | 'red' | 'blue'
    value: number | string
    icon?: ReactNode
  }
}

const Tag: FC<TagPropsType> = ({ option }) => {
  return (
    <div className={css.item} tag-color={option.color}>
      <span className={css.text}>{option.value}</span>
      {option.icon && <span className={css.icon}>{option.icon}</span>}
    </div>
  )
}

export default Tag

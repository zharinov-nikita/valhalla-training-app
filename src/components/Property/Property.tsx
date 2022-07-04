import { FC } from 'react'
import css from './Property.module.scss'

export type PropertyPropsType = {
  props: {
    name: string
    value: string
  }
}

const Property: FC<PropertyPropsType> = ({ props }) => {
  return (
    <div className={css.property}>
      <div className={css.name}>{props.name}</div>
      <div className={css.value}>{props.value}</div>
    </div>
  )
}

export default Property

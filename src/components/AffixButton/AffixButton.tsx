import { FC, MouseEventHandler, ReactNode } from 'react'
import css from './AffixButton.module.scss'

export type AffixButtonPropsType = {
  props: {
    title: string
    onClick?: MouseEventHandler
  }
}

const AffixButton: FC<AffixButtonPropsType> = ({ props }) => {
  return (
    <div className={css.affix} onClick={props.onClick}>
      <div className={css.button}>{props.title}</div>
    </div>
  )
}

export default AffixButton

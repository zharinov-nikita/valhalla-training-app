import { FC, MouseEventHandler, ReactNode } from 'react'
import css from './AffixButton.module.scss'

export type AffixButtonPropsType = {
  props: {
    title: string
    onClick?: MouseEventHandler
    disabled?: boolean
  }
}

const AffixButton: FC<AffixButtonPropsType> = ({ props }) => {
  return (
    <div className={css.affix} onClick={props.onClick}>
      <button className={css.button} disabled={props.disabled}>
        {props.title}
      </button>
    </div>
  )
}

export default AffixButton

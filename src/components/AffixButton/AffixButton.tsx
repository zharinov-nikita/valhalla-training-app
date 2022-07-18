import { FC, MouseEventHandler, ReactNode } from 'react'
import Button from '../Button/Button'
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
      <Button props={{ block: true, text: props.title, type: 'warning' }} />
    </div>
  )
}

export default AffixButton

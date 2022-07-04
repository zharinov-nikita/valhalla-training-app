import { FC } from 'react'
import css from './AffixButton.module.scss'

export type AffixButtonPropsType = {
  props: {
    title: string
  }
}

const AffixButton: FC<AffixButtonPropsType> = ({ props }) => {
  return (
    <div className={css.affix}>
      <div className={css.button}>{props.title}</div>
    </div>
  )
}

export default AffixButton

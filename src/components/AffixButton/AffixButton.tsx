import { FC } from 'react'
import css from './AffixButton.module.scss'

const AffixButton: FC = () => {
  return (
    <div className={css.affix}>
      <div className={css.button}>Завершить тренировку</div>
    </div>
  )
}

export default AffixButton

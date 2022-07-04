import { FC } from 'react'
import css from './Property.module.scss'

const Property: FC = () => {
  return (
    <div className={css.property}>
      <div className={css.name}>Инетесивность</div>
      <div className={css.value}>Низкая</div>
    </div>
  )
}

export default Property

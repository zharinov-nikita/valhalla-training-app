import { FC } from 'react'
import css from './Input.module.scss'

const Input: FC = () => {
  return <input type="text" className={css.input} placeholder={'Placeholder'} />
}

export default Input

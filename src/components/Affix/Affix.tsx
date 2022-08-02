import { FC, ReactNode } from 'react'
import style from './Affix.module.scss'

export type AffixPropsType = {
  children: ReactNode
}

const Affix: FC<AffixPropsType> = ({ children }) => {
  return (
    <div className={style.affix} data-component={'affix'}>
      <div className={style.container}>
        <div className={style.wrapper}>{children}</div>
      </div>
    </div>
  )
}

export default Affix

import { FC, ReactNode } from 'react'
import style from './Groop.module.scss'

export type GroopPropsType = {
  children: ReactNode
  className?: string
}

const Groop: FC<GroopPropsType> = ({ className, children }) => {
  return <div className={`${style.groop} ${className}`}>{children}</div>
}

export default Groop

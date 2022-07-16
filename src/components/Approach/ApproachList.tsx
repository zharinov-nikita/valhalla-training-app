import { FC, ReactNode } from 'react'
import css from './Approach.module.scss'

export type ApproachListPropsType = {
  children?: ReactNode
}

const ApproachList: FC<ApproachListPropsType> = ({ children }) => {
  return <div className={css.list}>{children}</div>
}

export default ApproachList

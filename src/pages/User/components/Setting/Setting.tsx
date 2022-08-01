import { FC } from 'react'
import List, { ListPropsType } from './List/List'

const Setting: FC<ListPropsType> = ({ list }) => {
  return <List list={list} />
}

export default Setting

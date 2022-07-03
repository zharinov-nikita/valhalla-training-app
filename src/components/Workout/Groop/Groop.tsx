import { FC } from 'react'
import Item, { ItemPropsType } from '../Item/Item'

export type GroopPropsType = {
  id: number
  groop: ItemPropsType[]
}

const Groop: FC<GroopPropsType> = ({ groop }) => {
  return (
    <>
      {groop.map((item) => (
        <>
          <Item key={item.option.id} option={item.option} />
        </>
      ))}
    </>
  )
}

export default Groop

import { FC, useState } from 'react'
import Checkbox from '../../Checkbox/Checkbox'

export type LeftPropsType = {
  props: {
    completed: boolean
  }
}

const Left: FC<LeftPropsType> = ({ props }) => {
  const [checked, setChecked] = useState<boolean>(props.completed)
  return <Checkbox props={{ checked }} onClick={() => setChecked(!checked)} />
}

export default Left

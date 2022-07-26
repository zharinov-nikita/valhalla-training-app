import { FC, useEffect, useState } from 'react'
import style from './Box.module.scss'
import Checkbox from '../../../../../components/Checkbox/Checkbox'

export type BoxPropsType = {
  props: {
    calback: any
    completed: boolean
    list: Array<{ id: number | string; title: string; value: string }>
  }
}

const Box: FC<BoxPropsType> = ({ props }) => {
  const [completed, setCompleted] = useState<boolean>(props.completed)

  useEffect(() => {
    if (completed) {
      props.calback(completed)
    }
    if (!completed) {
      props.calback(completed)
    }
  }, [completed])

  return (
    <div className={style.box}>
      <Checkbox
        props={{ checked: completed }}
        onClick={() => setCompleted(!completed)}
      />
      <div className={style.list}>
        {props.list.map((item) => (
          <div className={style.item} key={item.id}>
            <div className={style.title}>{item.title}</div>
            <div className={style.value}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Box

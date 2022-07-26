import { FC, useState } from 'react'
import style from './Groop.module.scss'
import Checkbox from '../../../../../components/Checkbox/Checkbox'

export type GroopPropsType = {
  props: {
    completed: boolean
    list: Array<{ id: number | string; title: string; value: string }>
  }
}

const Groop: FC<GroopPropsType> = ({ props }) => {
  const [completed, setCompleted] = useState<boolean>(props.completed)

  return (
    <div className={style.groop}>
      <Checkbox
        props={{ checked: completed }}
        onClick={() => setCompleted(!completed)}
      />
      <div className={style.list}>
        {props.list.map((item) => (
          <div className={style.item} key={item.id}>
            <div
              className={style.title}
              style={{
                textDecoration: `${completed ? 'line-through' : 'none'}`,
              }}
            >
              {item.title}
            </div>
            <div
              className={style.value}
              style={{
                textDecoration: `${completed ? 'line-through' : 'none'}`,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Groop

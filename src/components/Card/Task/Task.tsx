import { FC, useState } from 'react'
import { CloseOutlined, UnorderedListOutlined } from '@ant-design/icons'
import Button from '../../Button/Button'
import Checkbox from '../../Checkbox/Checkbox'
import style from './Task.module.scss'
import Left from './Left'
import Center from './Center'

export type TaskPropsType = {
  props: Array<{
    id: number | string
    completed: boolean
    option: Array<{ id: number | string; key: string; value: number | string }>
  }>
}

const Task: FC<TaskPropsType> = ({ props }) => {
  const [checked, setChecked] = useState<boolean>(false)
  const [visible, setVisible] = useState(false)
  return (
    <div className={style.list}>
      {props.map((item, index) => (
        <div className={style.item} key={item.id}>
          <div className={style.left}>
            <Left props={{ completed: checked }} />
          </div>
          <Center props={{ visible: false, option: item.option }} />
        </div>
      ))}
    </div>
  )
}

export default Task

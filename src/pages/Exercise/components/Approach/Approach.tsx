import { FC, useEffect, useState } from 'react'
import { OrderedListOutlined } from '@ant-design/icons'
import Icon from '../../../../components/Icon/Icon'
import Switch from '../../../../components/Switch/Switch'
import style from './Approach.module.scss'
import Box from './Box/Box'

export type ApproachPropsType = {
  props: {
    box: {
      title: string
      list: Array<{
        id: string | number
        completed: boolean
        list: Array<{ id: string | number; title: string; value: string }>
      }>
    }
  }
}

const Approach: FC<ApproachPropsType> = ({ props }) => {
  const [completeds, setCompleteds] = useState<boolean[]>([])
  const [isCompleteds, setIsCompleteds] = useState<boolean[]>([])

  let [progress, setProgress] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(true)

  return (
    <div className={style.approach}>
      <div className={style.header}>
        <div className={style.left}>
          <Icon
            props={{
              color: { type: 'transparent', value: 'green' },
              children: <OrderedListOutlined />,
              size: 'small',
            }}
          />
          <div className={style.title}>{props.box.title}</div>
        </div>
        <div className={style.right}>
          <Switch
            props={{ checked: visible }}
            onClick={() => setVisible(!visible)}
          />
        </div>
      </div>
      <div className={style.body} data-visible={visible}>
        {props.box.list.map((item) => (
          <Box
            props={{
              completed: item.completed,
              list: item.list,
              calback: (completed: boolean) => {
                if (completed) {
                  setCompleteds([...completeds, completed])
                  console.log(completeds)
                }
                if (!completed) {
                  setIsCompleteds([...isCompleteds, !completed])
                }
              },
            }}
            key={item.id}
          />
        ))}
      </div>
      <div className={style.footer} data-visible={visible}>
        <div className={style.progress}>
          <div
            className={style.placeholder}
            style={{
              width: `${(completeds.length * 100) / props.box.list.length}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Approach

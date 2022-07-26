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
            }}
            key={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Approach

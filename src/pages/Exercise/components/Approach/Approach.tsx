import { FC, useState } from 'react'
import { OrderedListOutlined } from '@ant-design/icons'
import Icon from '../../../../components/Icon/Icon'
import Switch from '../../../../components/Switch/Switch'
import style from './Approach.module.scss'
import Groop from './Groop/Groop'

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
  const [visible, setVisible] = useState<boolean>(false)
  const counter: Array<number> = []
  const list = props.box.list.map(({ list }) => list)

  list.forEach((item) => {
    item.forEach((item) => {
      if (item.title.toLowerCase().match(/количество/)) {
        counter.push(Number(item.value))
      }
    })
  })

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
          <div className={style.info}>
            <div className={style.title}>{props.box.title}</div>
            <div className={style.description}>
              {counter.reduce((prev, next) => prev + next)} количество /{' '}
              {counter.length} подходов
            </div>
          </div>
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
          <Groop
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

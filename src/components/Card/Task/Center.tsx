import { FC, useState } from 'react'
import {
  CloseOutlined,
  CommentOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import Button from '../../Button/Button'
import style from './Task.module.scss'
import Left from './Left'

export type CenterPropsType = {
  props: {
    visible: boolean
    option: Array<{ id: number | string; key: string; value: number | string }>
  }
}

const Center: FC<CenterPropsType> = ({ props }) => {
  const [visible, setVisible] = useState(props.visible)
  return (
    <>
      <div className={style.center}>
        {props.option.map(({ id, key, value }, index) => (
          <div
            className={style.data}
            data-visible={index < 2 ? true : visible}
            key={id}
          >
            <div className={style.key}>
              {index + 1}. {key}
            </div>
            <div className={style.value}>{value}</div>
          </div>
        ))}
      </div>
      <div className={style.right}>
        <Button
          props={{
            text: visible ? <CloseOutlined /> : <UnorderedListOutlined />,
            palette: true,
            size: 'medium',
            action: props.option.length,
          }}
          onClick={() => setVisible(!visible)}
        />
      </div>
    </>
  )
}

export default Center

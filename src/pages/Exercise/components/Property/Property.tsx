import { UnorderedListOutlined } from '@ant-design/icons'
import { FC, useState } from 'react'
import Icon from '../../../../components/Icon/Icon'
import Switch from '../../../../components/Switch/Switch'
import style from './Property.module.scss'

export type PropertyPropsType = {
  props: {
    list: Array<{ id: string | number; title: string; value: string | number }>
  }
}

const Property: FC<PropertyPropsType> = ({ props }) => {
  const [visible, setVisible] = useState<boolean>(true)
  return (
    <div className={style.property}>
      <div className={style.header}>
        <div className={style.left}>
          <Icon
            props={{
              color: { type: 'transparent', value: 'green' },
              children: <UnorderedListOutlined />,
              size: 'small',
            }}
          />
          <div className={style.title}>Характеристика</div>
        </div>
        <div className={style.right}>
          <Switch
            props={{ checked: visible }}
            onClick={() => setVisible(!visible)}
          />
        </div>
      </div>
      <div className={style.list} data-visible={visible}>
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

export default Property

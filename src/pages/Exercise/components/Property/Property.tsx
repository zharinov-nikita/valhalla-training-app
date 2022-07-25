import { UnorderedListOutlined } from '@ant-design/icons'
import { FC, useState } from 'react'
import Icon from '../../../../components/Icon/Icon'
import Switch from '../../../../components/Switch/Switch'
import style from './Property.module.scss'

const Property: FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
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
        <div className={style.item}>
          <div className={style.title}>Вид спорта</div>
          <div className={style.value}>Бег</div>
        </div>
        <div className={style.item}>
          <div className={style.title}>Длительность (мин) </div>
          <div className={style.value}>20</div>
        </div>
        <div className={style.item}>
          <div className={style.title}>Интенсивность</div>
          <div className={style.value}>Низкая</div>
        </div>
        <div className={style.item}>
          <div className={style.title}>Пульсовая зона (чсс)</div>
          <div className={style.value}>144 - 156</div>
        </div>
      </div>
    </div>
  )
}

export default Property

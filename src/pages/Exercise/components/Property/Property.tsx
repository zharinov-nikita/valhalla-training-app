import { UnorderedListOutlined } from '@ant-design/icons'
import { FC } from 'react'
import Icon from '../../../../components/Icon/Icon'
import style from './Property.module.scss'

const Property: FC = () => {
  return (
    <div className={style.property}>
      <div className={style.header}>
        <Icon
          props={{
            color: { type: 'transparent', value: 'green' },
            children: <UnorderedListOutlined />,
            size: 'small',
          }}
        />
        <div className={style.title}>Характеристика</div>
      </div>
      <div className={style.list}>
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
          <div className={style.title}>Пульсовая зона</div>
          <div className={style.value}>Первая</div>
        </div>
      </div>
    </div>
  )
}

export default Property

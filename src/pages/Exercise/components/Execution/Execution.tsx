import { OrderedListOutlined } from '@ant-design/icons'
import { FC, useState } from 'react'
import Icon from '../../../../components/Icon/Icon'
import Switch from '../../../../components/Switch/Switch'
import style from './Execution.module.scss'

const Execution: FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className={style.execution}>
      <div className={style.header}>
        <div className={style.left}>
          <Icon
            props={{
              color: { type: 'transparent', value: 'yellow' },
              children: <OrderedListOutlined />,
              size: 'small',
            }}
          />
          <div className={style.title}>Выполнение</div>
        </div>
        <div className={style.right}>
          <Switch
            props={{ checked: visible }}
            onClick={() => setVisible(!visible)}
          />
        </div>
      </div>
      <div className={style.body} data-visible={visible}>
        Сверхдистанционая тренировка со скоростынми интервалами. Выполняйте
        длительный бег втечение 120 минут. Каждые 20 минут делайте ускорение в
        течение 20 секунд
      </div>
    </div>
  )
}

export default Execution

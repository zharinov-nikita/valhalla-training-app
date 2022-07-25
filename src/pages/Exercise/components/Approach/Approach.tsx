import { SmileOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { FC, useState } from 'react'
import Checkbox from '../../../../components/Checkbox/Checkbox'
import Icon from '../../../../components/Icon/Icon'
import Switch from '../../../../components/Switch/Switch'
import style from './Approach.module.scss'

const Approach: FC = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(true)
  return (
    <div className={style.approach}>
      <div className={style.header}>
        <div className={style.left}>
          <Icon
            props={{
              color: { type: 'transparent', value: 'green' },
              children: <SmileOutlined />,
              size: 'small',
            }}
          />
          <div className={style.title}>Подтягивания</div>
        </div>
        <div className={style.right}>
          <Switch
            props={{ checked: visible }}
            onClick={() => setVisible(!visible)}
          />
        </div>
      </div>
      <div className={style.body} data-visible={visible}>
        <div className={style.box}>
          <Checkbox props={{ checked }} onClick={() => setChecked(!checked)} />
          <div className={style.list}>
            <div className={style.item}>
              <div className={style.title}>Количество (раз)</div>
              <div className={style.value}>17</div>
            </div>
            <div className={style.item}>
              <div className={style.title}>Отдых (сек)</div>
              <div className={style.value}>180</div>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <Checkbox props={{ checked: false }} />
          <div className={style.list}>
            <div className={style.item}>
              <div className={style.title}>Количество (раз)</div>
              <div className={style.value}>15</div>
            </div>
            <div className={style.item}>
              <div className={style.title}>Отдых (сек)</div>
              <div className={style.value}>120</div>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <Checkbox props={{ checked: false }} />
          <div className={style.list}>
            <div className={style.item}>
              <div className={style.title}>Количество (раз)</div>
              <div className={style.value}>15</div>
            </div>
            <div className={style.item}>
              <div className={style.title}>Отдых (сек)</div>
              <div className={style.value}>120</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approach

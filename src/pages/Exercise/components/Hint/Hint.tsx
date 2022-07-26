import { FC, useState } from 'react'
import { BulbOutlined } from '@ant-design/icons'
import Icon from '../../../../components/Icon/Icon'
import Switch from '../../../../components/Switch/Switch'
import style from './Hint.module.scss'

export type HintPropsType = {
  props: {
    text: string
  }
}

const Hint: FC<HintPropsType> = ({ props }) => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className={style.hint}>
      <div className={style.header}>
        <div className={style.left}>
          <Icon
            props={{
              color: { type: 'transparent', value: 'purple' },
              children: <BulbOutlined />,
              size: 'small',
            }}
          />
          <div className={style.title}>Подсказки</div>
        </div>
        <div className={style.right}>
          <Switch
            props={{ checked: visible }}
            onClick={() => setVisible(!visible)}
          />
        </div>
      </div>
      <div className={style.body} data-visible={visible}>
        {props.text}
      </div>
    </div>
  )
}

export default Hint

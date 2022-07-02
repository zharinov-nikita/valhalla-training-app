import { FieldTimeOutlined, TrophyOutlined } from '@ant-design/icons'
import { FC, useEffect, useState } from 'react'
import css from './Item.module.scss'

export type ItemPropsType = {
  option: {
    name: string
    value: number | string
    time: number | string
    level?: 'low' | 'mid' | 'high'
  }
}

const Item: FC<ItemPropsType> = ({ option }) => {
  const [level, setLevel] = useState<'low' | 'mid' | 'high'>('low')
  const [value, setValue] = useState<string>('')
  const [time, setTime] = useState<string>('')

  const onChangeValue = (e: { target: HTMLInputElement }) => {
    if (!isNaN(Number(e.target.value)) && Number(e.target.value) <= 999) {
      setValue(String(e.target.value))
    }
  }

  useEffect(() => {
    if (Number(value) <= 10) {
      setLevel('low')
    }

    if (Number(value) >= 14 && Number(value) <= 16) {
      setLevel('mid')
    }

    if (Number(value) >= 16) {
      setLevel('high')
    }
  }, [value])

  const onChangeTime = (e: { target: HTMLInputElement }) => {
    if (!isNaN(Number(e.target.value)) && Number(e.target.value) <= 9999) {
      setTime(String(e.target.value))
    }
  }

  return (
    <div className={css.item}>
      <div className={css.name}>{option.name}</div>

      <div className={css.list}>
        <div className={css.value} data-level={level}>
          <input
            type="text"
            value={value}
            onChange={onChangeValue}
            min={0}
            max={200}
            required
          />
          <TrophyOutlined />
        </div>
        <div className={css.value}>
          <input
            type="text"
            value={time}
            onChange={onChangeTime}
            min={0}
            max={36000}
            required
          />
          <FieldTimeOutlined />
        </div>
      </div>
    </div>
  )
}

export default Item

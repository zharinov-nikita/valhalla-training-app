import { FieldTimeOutlined, TrophyOutlined } from '@ant-design/icons'
import { FC, useEffect, useState } from 'react'
import css from './Item.module.scss'

export type ItemPropsType = {
  option: {
    name: string
    value: number | string
    time: number | string
    exerciseLevel: {
      low: number
      mid: number
      high: number
    }
  }
}

const Item: FC<ItemPropsType> = ({ option }) => {
  const [level, setLevel] = useState<'low' | 'mid' | 'high'>('low')
  const [levelTime, setLevelTime] = useState<'low' | 'mid' | 'high'>('low')
  const [value, setValue] = useState('')
  const [time, setTime] = useState('')

  const onChangeValue = (e: { target: HTMLInputElement }) => {
    if (!isNaN(Number(e.target.value)) && Number(e.target.value) <= 999) {
      setValue(String(e.target.value))
    }
  }

  useEffect(() => {
    // value
    if (value.length > 0) {
      if (Number(value) <= option.exerciseLevel.low) {
        setLevel('low')
      }

      if (Number(value) > option.exerciseLevel.low) {
        setLevel('mid')
      }

      if (Number(value) >= option.exerciseLevel.high) {
        setLevel('high')
      }
    }

    if (value.length === 0) {
      setLevelTime('low')
    }

    // time

    if (time.length > 0) {
      if (Number(time) > 120) {
        setLevelTime('low')
      }

      if (Number(time) === 120) {
        setLevelTime('mid')
      }

      if (Number(time) < 120) {
        setLevelTime('high')
      }
    }

    if (time.length === 0) {
      setLevelTime('low')
    }
  }, [value, time])

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
            autoComplete={'off'}
          />
          <TrophyOutlined />
        </div>
        <div className={css.value} data-level={levelTime}>
          <input
            type="text"
            value={time}
            onChange={onChangeTime}
            min={0}
            max={36000}
            autoComplete={'off'}
          />
          <FieldTimeOutlined />
        </div>
      </div>
    </div>
  )
}

export default Item

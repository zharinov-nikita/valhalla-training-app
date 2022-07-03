import { FieldTimeOutlined, HeartFilled } from '@ant-design/icons'
import { FC } from 'react'
import Item from './Item/Item'

const Workout: FC = () => {
  return (
    <>
      <Item
        option={{
          title: 'Дистанционная тренировка',
          tag: [
            { value: 80, icon: <FieldTimeOutlined /> },
            { value: 'Интенсивная', icon: <HeartFilled /> },
          ],
        }}
      />
    </>
  )
}

export default Workout

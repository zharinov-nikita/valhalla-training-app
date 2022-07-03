import {
  FieldTimeOutlined,
  HeartFilled,
  HeartOutlined,
} from '@ant-design/icons'
import { ItemPropsType } from '../Item/Item'

export const listData: ItemPropsType[] = [
  {
    option: {
      id: 1,
      title: 'Дистанционная тренировка',
      tag: [
        { id: 1, value: 80, icon: <FieldTimeOutlined /> },
        { id: 2, value: 'Интенсивная', icon: <HeartOutlined /> },
      ],
    },
  },
  {
    option: {
      id: 2,
      title: 'Дистанционная тренировка',
      tag: [
        { id: 3, value: 80, icon: <FieldTimeOutlined /> },
        { id: 4, value: 'Интенсивная', icon: <HeartOutlined /> },
      ],
    },
  },
  {
    option: {
      id: 3,
      title: 'Дистанционная тренировка',
      tag: [
        { id: 5, value: 80, icon: <FieldTimeOutlined /> },
        { id: 6, value: 'Интенсивная', icon: <HeartOutlined /> },
      ],
    },
  },
  {
    option: {
      id: 4,
      title: 'Сверхдистанционная тренировка',
      tag: [
        { id: 7, value: 120, icon: <FieldTimeOutlined /> },
        { id: 8, value: 'Интенсивная', icon: <HeartOutlined /> },
      ],
    },
  },
]

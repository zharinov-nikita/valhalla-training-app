import {
  CalendarOutlined,
  FieldTimeOutlined,
  HeartOutlined,
} from '@ant-design/icons'
import { ItemPropsType } from '../Item/Item'

export const listData: ItemPropsType[] = [
  {
    option: {
      id: 1,
      title: 'Дистанционная тренировка',
      tag: [
        {
          id: 1,
          color: 'red',
          value: 'Первый',
          icon: <CalendarOutlined />,
        },
        {
          id: 2,
          color: 'yellow',
          value: 80,
          icon: <FieldTimeOutlined />,
        },
        {
          id: 3,
          color: 'yellow',
          value: 'Интенсивная',
          icon: <HeartOutlined />,
        },
      ],
      completed: false,
    },
  },
  {
    option: {
      id: 1.5,
      title: 'Сила',
      tag: [
        {
          id: 1,
          color: 'red',
          value: 'Первый',
          icon: <CalendarOutlined />,
        },
      ],
      completed: false,
    },
  },
]

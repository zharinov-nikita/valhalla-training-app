import {
  CalendarOutlined,
  FieldTimeOutlined,
  HeartOutlined,
} from '@ant-design/icons'
import { ItemPropsType } from '../Item/Item'

export const listData: Array<ItemPropsType> = [
  {
    option: {
      item: {
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
      groop: [
        {
          id: 2,
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
        {
          id: 2,
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
      ],
    },
  },
]

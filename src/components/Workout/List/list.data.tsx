import {
  CalendarOutlined,
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
        { id: 1, color: 'red', value: 'Первый', icon: <CalendarOutlined /> },
        { id: 2, value: 80, icon: <FieldTimeOutlined /> },
        { id: 3, value: 'Интенсивная', icon: <HeartOutlined /> },
      ],
    },
  },
  {
    option: {
      id: 2,
      title: 'Выходной',
      tag: [{ id: 1, value: 'Второй', icon: <CalendarOutlined /> }],
    },
  },
  {
    option: {
      id: 3,
      title: 'Дистанционная тренировка',
      tag: [
        { id: 1, value: 'Третий', icon: <CalendarOutlined /> },
        { id: 2, value: 80, icon: <FieldTimeOutlined /> },
        { id: 3, value: 'Интенсивная', icon: <HeartOutlined /> },
      ],
    },
  },
  {
    option: {
      id: 4,
      title: 'Выходной',
      tag: [{ id: 1, value: 'Четвертый', icon: <CalendarOutlined /> }],
    },
  },
]

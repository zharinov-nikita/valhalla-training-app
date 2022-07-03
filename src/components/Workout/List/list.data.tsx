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
      id: 2,
      title: 'Выходной',
      tag: [
        {
          id: 1,
          color: 'red',
          value: 'Второй',
          icon: <CalendarOutlined />,
        },
      ],
      completed: false,
    },
  },
  {
    option: {
      id: 3,
      title: 'Дистанционная тренировка',
      tag: [
        {
          id: 1,
          color: 'red',
          value: 'Третий',
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
      id: 4,
      title: 'Выходной',
      tag: [
        {
          id: 1,
          color: 'red',
          value: 'Четвертый',
          icon: <CalendarOutlined />,
        },
      ],
      completed: false,
    },
  },
  {
    option: {
      id: 5,
      title: 'Дистанционная тренировка',
      tag: [
        {
          id: 1,
          color: 'red',
          value: 'Пятый',
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
      id: 6,
      title: 'Выходной',
      tag: [
        {
          id: 1,
          color: 'red',
          value: 'Шестой',
          icon: <CalendarOutlined />,
        },
      ],
      completed: false,
    },
  },
  {
    option: {
      id: 7,
      title: 'Сверхдистанционная тренировка',
      tag: [
        {
          id: 1,
          color: 'red',
          value: 'Пятый',
          icon: <CalendarOutlined />,
        },
        {
          id: 2,
          color: 'yellow',
          value: 102,
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
]

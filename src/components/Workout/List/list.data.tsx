import { CalendarOutlined } from '@ant-design/icons'
import { GroopPropsType } from '../Groop/Groop'

export const listData: GroopPropsType[] = [
  {
    groop: [
      {
        option: {
          id: 1,
          title: 'Первый',
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
      {
        option: {
          id: 1,
          title: 'Первый',
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
    ],
  },
  {
    groop: [
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
          ],
          completed: false,
        },
      },
    ],
  },
]

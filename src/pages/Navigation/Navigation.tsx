import {
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Navigation from '../../components/Navigation/Navigation'

export default function () {
  return (
    <Navigation
      props={{
        list: [
          {
            id: 1,
            to: '/profile',
            title: 'Профиль',
            description: 'Страница, на которой находиться ваш профиль',
            icon: <UserOutlined />,
          },
          {
            id: 2,
            to: '/setting',
            title: 'Настройки',
            description: 'Страница, на которой находиться ваш профиль',
            icon: <SettingOutlined />,
          },
          {
            id: 3,
            to: '/exercise',
            title: 'Упражнения',
            description: 'Страница, на которой находиться ваш профиль',
            icon: <UserAddOutlined />,
          },
        ],
      }}
    />
  )
}

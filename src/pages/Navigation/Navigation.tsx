import {
  SettingOutlined,
  UserOutlined,
  ZoomOutOutlined,
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
            icon: <ZoomOutOutlined />,
          },
          {
            id: 2,
            to: '/plan',
            title: 'Аккаунт',
            description: 'Страница, на которой находиться ваш профиль',
            icon: <UserOutlined />,
          },
          {
            id: 3,
            to: '/cycle',
            title: 'Моя неделя',
            description: 'Страница, на которой находиться ваш профиль',
            icon: <SettingOutlined />,
          },
          {
            id: 4,
            to: '/setting',
            title: 'Настройки',
            description: 'Страница, на которой находиться ваш профиль',
            icon: <SettingOutlined />,
          },
        ],
      }}
    />
  )
}

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
            to: '/plan',
            title: 'План',
            description: 'Страница, на которой находиться ваш план',
            icon: <UserOutlined />,
          },
        ],
      }}
    />
  )
}

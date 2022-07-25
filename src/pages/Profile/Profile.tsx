import { ApiOutlined } from '@ant-design/icons'
import { FC } from 'react'
import Icon from '../../components/Icon/Icon'
import Info from './components/Info/Info'
import Item from './components/Item/Item'
import List from './components/List/List'
import style from './Profile.module.scss'

const Profile: FC = () => {
  return (
    <div className={style.profile}>
      <Info props={{ name: 'Данил', login: 'zharinov-danil' }} />
      <List>
        <Item
          props={{
            to: '/profile',
            icon: (
              <Icon
                props={{
                  children: <ApiOutlined />,
                  color: { type: 'transparent', value: 'red' },
                }}
              />
            ),
            title: 'Сегодня',
            description: 'Запланировано на сегодня',
            counter: 2,
          }}
        />
        <Item
          props={{
            to: '/profile',
            icon: (
              <Icon
                props={{
                  children: <ApiOutlined />,
                  color: { type: 'transparent', value: 'green' },
                }}
              />
            ),
            title: 'Завтра',
            description: 'Запланировано на завтра',
            counter: 2,
          }}
        />
        <Item
          props={{
            to: '/profile',
            icon: (
              <Icon
                props={{
                  children: <ApiOutlined />,
                  color: { type: 'transparent', value: 'yellow' },
                }}
              />
            ),
            title: 'Предстоящие',
            description: 'Предстоящие тренировки',
            counter: 0,
          }}
        />
      </List>
    </div>
  )
}

export default Profile

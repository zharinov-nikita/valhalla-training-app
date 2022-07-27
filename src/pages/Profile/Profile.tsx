import { ApiOutlined, UserOutlined } from '@ant-design/icons'
import Affix from '../../components/Affix/Affix'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import ListCard from '../../components/Card/List/List'
import Message from '../../components/Card/Message/Message'
import Icon from '../../components/Icon/Icon'
import List from '../../components/List/List'
import Setting from '../../components/Setting/Setting'
import Switch from '../../components/Switch/Switch'
import Workout from '../../components/Workout/Workout'
import { useAppDispatch } from '../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../hooks/store/useAppSelector'
import { appSlice } from '../../redux/app/app.slice'

export default function () {
  const dispatch = useAppDispatch()
  const { switchTheme } = appSlice.actions
  const { theme } = useAppSelector((state) => state.app)

  return (
    <List>
      <Setting
        props={[
          {
            id: 1,
            title: 'Данил',
            description: 'zharinov-danil',
            before: (
              <Icon
                props={{
                  children: <UserOutlined />,
                  color: { type: 'transparent', value: 'green' },
                }}
              />
            ),
            after: (
              <Button
                props={{
                  block: false,
                  size: 'small',
                  text: 'Обновить',
                  palette: true,
                }}
              />
            ),
          },
        ]}
      />

      <Setting
        props={[
          {
            id: 1,
            title: 'Сегодня',
            description: 'Тренировки запланированные на сегодня',
            before: (
              <Icon
                props={{
                  children: <ApiOutlined />,
                  color: { type: 'transparent', value: 'red' },
                }}
              />
            ),
            after: (
              <Icon
                props={{
                  children: 0,
                  size: 'small',
                  palette: true,
                }}
              />
            ),
          },
          {
            id: 2,
            title: 'Завтра',
            description: 'Тренировки запланированные на завтра',
            before: (
              <Icon
                props={{
                  children: <ApiOutlined />,
                  color: { type: 'transparent', value: 'yellow' },
                }}
              />
            ),
            after: (
              <Icon
                props={{
                  children: 2,
                  size: 'small',
                  palette: true,
                }}
              />
            ),
          },
          {
            id: 3,
            title: 'Предстоящие',
            description: 'Предстоящие тренировки',
            before: (
              <Icon
                props={{
                  children: <ApiOutlined />,
                  color: { type: 'transparent', value: 'green' },
                }}
              />
            ),
            after: (
              <Icon
                props={{
                  children: 2,
                  size: 'small',
                  palette: true,
                }}
              />
            ),
          },
        ]}
      />

      <Setting
        props={[
          {
            id: 1,
            title: 'Тема',
            description: `Установлена ${
              theme === 'dark' ? 'темная' : 'светлая'
            }`,
            after: (
              <Switch
                props={{ checked: theme === 'dark' ? true : false }}
                onClick={() => dispatch(switchTheme())}
              />
            ),
          },
        ]}
      />

      <Affix>
        <Button
          props={{
            size: 'medium',
            block: true,
            text: 'Завершить тренировку',
            color: { type: 'fill', value: 'purple' },
          }}
        />
      </Affix>
    </List>
  )
}

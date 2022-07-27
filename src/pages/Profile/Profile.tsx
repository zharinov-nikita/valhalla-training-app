import { ApiOutlined, UserOutlined } from '@ant-design/icons'
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
      <Card
        props={{
          icon: (
            <Icon
              props={{
                children: <ApiOutlined />,
                color: { type: 'transparent', value: 'yellow' },
                size: 'small',
              }}
            />
          ),
          title: 'Бег',
          description: 'Беговая тренировка',
          visible: true,
        }}
      >
        <ListCard
          props={[
            { id: 1, key: 'Длительность (мин)', value: 40 },
            { id: 2, key: 'Интенсивность', value: 'Низкая' },
            { id: 3, key: 'Пульс (чсс)', value: '144 - 167' },
          ]}
        />
      </Card>

      <Card
        props={{
          icon: (
            <Icon
              props={{
                children: <ApiOutlined />,
                color: { type: 'transparent', value: 'yellow' },
                size: 'small',
              }}
            />
          ),
          title: 'Подсказка',
          description: 'Инструкция для тренировки',
          visible: true,
        }}
      >
        <Message
          props={{
            text: 'Моя беговая тренировка на своф а овыфл афыв алвфыо алвыфо алдфыво лдаовы фаалдф ыла фл ыыо алфоыаыфавыф',
          }}
        />
      </Card>

      <Workout />
      <Workout />

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
            id: 2,
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
    </List>
  )
}

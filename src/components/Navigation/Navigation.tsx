import { SettingOutlined } from '@ant-design/icons'
import { FC, ReactNode } from 'react'
import { useAppSelector } from '../../hooks/store/useAppSelector'
import Icon from '../Icon/Icon'
import style from './Navigation.module.scss'

export type NavigationPropsType = {
  props: {
    list: Array<{
      id: number
      icon: ReactNode
      title: string
      description: string
    }>
  }
}

export const Navigation: FC<NavigationPropsType> = ({ props }) => {
  const { visible } = useAppSelector((state) => state.navigation)
  return (
    <div className={style.navigation} data-visible={visible}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.list}>
            {props.list.map(({ id, icon, title, description }) => (
              <div className={style.item} key={id}>
                <Icon
                  props={{
                    color: { value: 'purple', type: 'transparent' },
                    children: icon,
                  }}
                />
                <div className={style.text}>
                  <div className={style.title}>{title}</div>
                  <div className={style.description}>{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation

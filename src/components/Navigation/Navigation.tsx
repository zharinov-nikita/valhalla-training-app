import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'
import { useVisible } from './hooks/useVisible'
import style from './Navigation.module.scss'

export type NavigationPropsType = {
  props: {
    list: Array<{
      id: number
      to: string
      icon: ReactNode
      title: string
      description: string
    }>
  }
}

export const Navigation: FC<NavigationPropsType> = ({ props }) => {
  const { visible } = useVisible()

  return (
    <div className={style.navigation} data-visible={visible}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.list}>
            {props.list.map(({ id, to, icon, title, description }) => (
              <Link to={to} className={style.item} key={id}>
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation

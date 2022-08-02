import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'
import List from '../List/List'
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
          <List>
            {props.list.map(({ id, to, icon, title, description }) => (
              <Link to={to} className={style.item} key={id}>
                <Icon
                  props={{
                    color: { value: 'green', type: 'transparent' },
                    children: icon,
                    size: 'small',
                  }}
                />
                <div className={style.text}>
                  <div className={style.title}>{title}</div>
                  <div className={style.description}>{description}</div>
                </div>
              </Link>
            ))}
          </List>
        </div>
      </div>
    </div>
  )
}

export default Navigation

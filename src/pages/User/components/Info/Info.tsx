import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/Button/Button'
import Tag from '../../../../components/Tag/Tag'
import { useAppDispatch } from '../../../../hooks/store/useAppDispatch'
import { userSlice } from '../../../../redux/user/user.slice'
import style from './Info.module.scss'

export type InfoPropsType = {
  firstname: string
  lastname: string
  role: string
  login: string
}

const Info: FC<InfoPropsType> = ({ firstname, lastname, login, role }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { logout } = userSlice.actions
  return (
    <div className={style.info}>
      <div className={style.left}>
        <div className={style.icon}>{firstname.split('')[0]}</div>
        <div className={style.data}>
          <div className={style.header}>
            <div className={style.left}>
              <span className={style.firstname}>{firstname}</span>
              <span className={style.lastname}>{lastname}</span>
            </div>
            <div className={style.right}>
              <Tag
                size="small"
                text={role}
                color={{ type: 'transparent', value: 'yellow' }}
              />
            </div>
          </div>
          <div className={style.body}>
            <span className={style.login}>{login}</span>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <Button
          size="small"
          text={'Выйти'}
          color={{ type: 'fill', value: 'red' }}
          onClick={() => {
            localStorage.removeItem('currentUser')
            dispatch(logout())
            navigate('/authorization', { replace: true })
          }}
        />
      </div>
    </div>
  )
}

export default Info

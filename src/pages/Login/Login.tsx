import { FC } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const Login: FC = () => {
  const onClick = (login: string, password: string) => {
    localStorage.setItem('login', String(login))
    localStorage.setItem('password', String(password))
    console.log(true)
  }

  return (
    <div>
      <Button
        props={{
          text: 'Авторизация',
          block: true,
          type: 'warning',
          onClick: () => onClick('zharinov-danil', 'password'),
        }}
      />
    </div>
  )
}

export default Login

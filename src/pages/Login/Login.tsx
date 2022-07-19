import axios from 'axios'
import { FC, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { UserType } from '../../redux/user/user.service'

const apiKey: string = String(process.env['REACT_APP_API_KEY'])
const apiBaseUrl: string = String(process.env['REACT_APP_API_BASE_URL'])

const Login: FC = () => {
  const [isUser, setIsUser] = useState<{ login: string; password: string }>({
    login: '',
    password: '',
  })

  const auth = async () => {
    try {
      const user = await axios.get<UserType[]>(`${apiBaseUrl}/user`, {
        headers: {
          'api-key': apiKey,
          login: isUser.login,
          password: isUser.password,
        },
      })
      if (user.data.length > 0) {
        localStorage.setItem('login', String(isUser.login))
        localStorage.setItem('password', String(isUser.password))
        window.location.replace('/user')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsUser({ ...isUser, [e.target.name]: e.currentTarget.value })

  return (
    <div>
      <Input
        props={{
          name: 'login',
          placeholder: 'login',
          value: isUser.login,
          onChange,
        }}
      />
      <Input
        props={{
          name: 'password',
          placeholder: 'password',
          value: isUser.password,
          onChange,
        }}
      />
      <Button
        props={{
          text: 'Авторизация',
          block: true,
          type: 'warning',
          onClick: () => auth(),
        }}
      />
    </div>
  )
}

export default Login

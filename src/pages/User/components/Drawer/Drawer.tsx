import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/Button/Button'
import CommonDrawer from '../../../../components/Drawer/Drawer'
import Input from '../../../../components/Input/Input'
import List from '../../../../components/List/List'
import { useFindByIdAndUpdateMutation } from '../../../../redux/user/user.service'
import { useDrawer } from './hooks/useDrawer'

const Drawer: FC = () => {
  const navigate = useNavigate()
  const [findByIdAndUpdate, { isSuccess, isError }] = useFindByIdAndUpdateMutation()
  const {
    key,
    inputType,
    message,
    text,
    type,
    updateUser,
    currentUser,
    disabled,
    handlerChangeData,
  } = useDrawer(isError, isSuccess)

  return (
    <CommonDrawer>
      <List gap={12}>
        <Input
          value={updateUser[key]}
          placeholder={type}
          message={message}
          type={inputType}
          onChange={handlerChangeData}
        />
        <Button
          block={true}
          disabled={disabled}
          size="medium"
          text={text}
          color={{ type: 'fill', value: 'purple' }}
          onClick={() =>
            findByIdAndUpdate({
              _id: currentUser._id,
              [key]: updateUser[key],
            })
          }
        />
      </List>
    </CommonDrawer>
  )
}

export default Drawer

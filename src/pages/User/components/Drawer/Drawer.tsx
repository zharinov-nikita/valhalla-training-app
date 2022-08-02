import { FC } from 'react'
import Button from '../../../../components/Button/Button'
import CommonDrawer from '../../../../components/Drawer/Drawer'
import Input from '../../../../components/Input/Input'
import List from '../../../../components/List/List'
import { useFindByIdAndUpdateMutation } from '../../../../redux/user/user.service'
import { useButtonText } from './hooks/useButtonText'
import { useDrawer } from './hooks/useDrawer'
import { useObjectKey } from './hooks/useObjectKey'

const Drawer: FC = () => {
  const [findByIdAndUpdate, { isSuccess, isError }] = useFindByIdAndUpdateMutation()
  const {
    inputType,
    message,
    type,
    updateUser,
    currentUser,
    disabled,
    handlerChangeData,
  } = useDrawer(isError, isSuccess)

  const { text } = useButtonText()
  const { key } = useObjectKey()

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

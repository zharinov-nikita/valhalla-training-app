import { FC } from 'react'
import Button from '../../../../components/Common/Button/Button'
import CommonDrawer from '../../../../components/Common/Drawer/Drawer'
import Input from '../../../../components/Common/Input/Input'
import List from '../../../../components/Common/List/List'
import { useFindByIdAndUpdateMutation } from '../../../../redux/user/user.service'
import { useDrawer } from './hooks/useDrawer'

const Drawer: FC = () => {
  const [findByIdAndUpdate, { isSuccess, isError }] = useFindByIdAndUpdateMutation()
  const { key, inputType, message, text, type, data, disabled, handlerChangeData } = useDrawer(
    isError,
    isSuccess
  )

  return (
    <CommonDrawer>
      <List gap={12}>
        <Input
          value={data[key]}
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
          onClick={() => findByIdAndUpdate({ [key]: data[key] })}
        />
      </List>
    </CommonDrawer>
  )
}

export default Drawer

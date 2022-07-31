import { FC } from 'react'
import { useAppDispatch } from '../../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../../hooks/store/useAppSelector'
import { userSlice } from '../../../../redux/user/user.slice'
import Button from '../../../../components/Common/Button/Button'
import CommonDrawer from '../../../../components/Common/Drawer/Drawer'
import Input from '../../../../components/Common/Input/Input'
import List from '../../../../components/Common/List/List'

const Drawer: FC = () => {
  const { data } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const { changeData } = userSlice.actions
  return (
    <CommonDrawer>
      <List gap={12}>
        <Input
          value={data.value}
          onChange={(e) =>
            dispatch(changeData({ ...data, value: e.target.value }))
          }
        />
        <Button
          block={true}
          size="medium"
          disabled={data.value.length > 0 ? false : true}
          text={`Обновить ${data.key.toLowerCase()}`}
          color={{ type: 'fill', value: 'purple' }}
        />
      </List>
    </CommonDrawer>
  )
}

export default Drawer

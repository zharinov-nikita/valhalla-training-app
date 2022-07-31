import { FC } from 'react'
import { useAppDispatch } from '../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../hooks/store/useAppSelector'
import { userSlice } from '../../../redux/user/user.slice'
import Button from '../../Common/Button/Button'
import CommonDrawer from '../../Common/Drawer/Drawer'
import Input from '../../Common/Input/Input'
import List from '../../Common/List/List'

const Drawer: FC = () => {
  const { drawer } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const { changeData } = userSlice.actions
  return (
    <CommonDrawer>
      <List gap={12}>
        <Input
          value={drawer.value}
          onChange={(e) =>
            dispatch(changeData({ ...drawer, value: e.target.value }))
          }
        />
        <Button
          block={true}
          size="medium"
          text={'Обновить данные'}
          color={{ type: 'fill', value: 'purple' }}
        />
      </List>
    </CommonDrawer>
  )
}

export default Drawer

import { FC } from 'react'
import { useAppSelector } from '../../../hooks/store/useAppSelector'
import Button from '../../Common/Button/Button'
import CommonDrawer from '../../Common/Drawer/Drawer'
import List from '../../Common/List/List'

const Drawer: FC = () => {
  const { drawer } = useAppSelector((state) => state.user)
  return (
    <CommonDrawer>
      <List>
        {drawer.key}
        {drawer.value}
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

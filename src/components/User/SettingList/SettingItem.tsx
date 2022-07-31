import { FC } from 'react'
import style from './SettingList.module.scss'
import Button from '../../Common/Button/Button'
import { drawerSlice } from '../../../redux/drawer/drawer.slice'
import { useAppDispatch } from '../../../hooks/store/useAppDispatch'
import { userSlice } from '../../../redux/user/user.slice'

export type SettingItemPropsType = {
  settingkey: string
  settingValue: string
}

const SettingItem: FC<SettingItemPropsType> = ({
  settingkey,
  settingValue,
}) => {
  const { changeData } = userSlice.actions
  const { show } = drawerSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className={style.item}>
      <div className={style.left}>
        <div className={style.key}>{settingkey}</div>
        <div className={style.value}>{settingValue}</div>
      </div>
      <div className={style.right}>
        <Button
          size="small"
          text="Обновить"
          disabled={
            settingkey === 'Логин' || settingkey === 'Роль' ? true : false
          }
          palette={true}
          onClick={() => {
            dispatch(changeData({ key: settingkey, value: settingValue }))
            dispatch(show())
          }}
        />
      </div>
    </div>
  )
}

export default SettingItem

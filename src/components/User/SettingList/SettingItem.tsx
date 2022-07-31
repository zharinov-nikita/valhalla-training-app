import { FC } from 'react'
import style from './SettingList.module.scss'
import Button from '../../Common/Button/Button'
import { drawerSlice } from '../../../redux/drawer/drawer.slice'
import { useAppDispatch } from '../../../hooks/store/useAppDispatch'
import { userSlice } from '../../../redux/user/user.slice'
import { useAppSelector } from '../../../hooks/store/useAppSelector'
import Tag from '../../Common/Tag/Tag'

export type SettingItemPropsType = {
  settingkey: string
  settingValue: string
}

const SettingItem: FC<SettingItemPropsType> = ({
  settingkey,
  settingValue,
}) => {
  const { data } = useAppSelector((state) => state.user)
  const { changeData } = userSlice.actions
  const { show } = drawerSlice.actions
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(changeData({ ...data, key: settingkey, value: settingValue }))
    dispatch(show())
  }

  const disabled =
    settingkey === 'Идентификатор' ||
    settingkey === 'Роль' ||
    settingkey === 'Логин'
      ? true
      : false

  return (
    <div className={style.item}>
      <div className={style.left}>
        <div className={style.key}>{settingkey}</div>
        <div className={style.value}>
          <Tag
            size="small"
            text={
              settingkey === 'Пароль'
                ? '*'.repeat(settingValue.length)
                : settingValue
            }
            color={{ type: 'transparent', value: 'green' }}
          />
        </div>
      </div>
      <div className={style.right}>
        <Button
          size="small"
          disabled={disabled}
          text="Обновить"
          palette={true}
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default SettingItem

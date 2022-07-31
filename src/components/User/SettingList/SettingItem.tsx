import { FC } from 'react'
import style from './SettingList.module.scss'
import Button from '../../Common/Button/Button'
import { drawerSlice } from '../../../redux/drawer/drawer.slice'
import { useAppDispatch } from '../../../hooks/store/useAppDispatch'

export type SettingItemPropsType = {
  settingkey: string
  settingValue: string
}

const SettingItem: FC<SettingItemPropsType> = ({
  settingkey,
  settingValue,
}) => {
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
          palette={true}
          onClick={() => dispatch(show('update'))}
        />
      </div>
    </div>
  )
}

export default SettingItem

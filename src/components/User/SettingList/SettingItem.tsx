import { FC, MouseEventHandler } from 'react'
import style from './SettingList.module.scss'
import Button from '../../Common/Button/Button'

export type SettingItemPropsType = {
  settingkey: string
  settingValue: string
}

const SettingItem: FC<SettingItemPropsType> = ({
  settingkey,
  settingValue,
}) => {
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
          onClick={() => console.log(settingValue)}
        />
      </div>
    </div>
  )
}

export default SettingItem

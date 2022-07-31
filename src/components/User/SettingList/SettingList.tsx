import { FC } from 'react'
import style from './SettingList.module.scss'
import SettingItem from './SettingItem'

export type SettingPropsType = {}

const SettingList: FC<SettingPropsType> = () => {
  return (
    <div className={style.list}>
      {[
        { settingKey: 'Имя', settingValue: 'Данил' },
        { settingKey: 'Фамилия', settingValue: 'Жаринов' },
      ].map((item) => (
        <SettingItem
          key={item.settingValue}
          settingkey={item.settingKey}
          settingValue={item.settingValue}
        />
      ))}
    </div>
  )
}

export default SettingList

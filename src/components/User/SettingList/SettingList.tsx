import { FC } from 'react'
import style from './SettingList.module.scss'
import SettingItem from './SettingItem'

export type SettingListType = {
  list: Array<{ key: string; value: string }>
}

const SettingList: FC<SettingListType> = ({ list }) => {
  return (
    <div className={style.list}>
      {list.map(({ key, value }) => (
        <SettingItem key={key} settingkey={key} settingValue={value} />
      ))}
    </div>
  )
}

export default SettingList

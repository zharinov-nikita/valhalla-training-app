import { FC } from 'react'
import style from '../Setting.module.scss'
import Button from '../../../../../components/Button/Button'
import { drawerSlice } from '../../../../../redux/drawer/drawer.slice'
import { useAppDispatch } from '../../../../../hooks/store/useAppDispatch'
import Tag from '../../../../../components/Tag/Tag'

export type ItemPropsType = {
  settingKey: string
  settingValue: string
}

const Item: FC<ItemPropsType> = ({ settingKey, settingValue }) => {
  const { show } = drawerSlice.actions
  const dispatch = useAppDispatch()
  const onClick = () => dispatch(show(settingKey))
  const disabled = settingKey === 'Идентификатор' ? true : false

  return (
    <div className={style.item}>
      <div className={style.left}>
        <div className={style.key}>{settingKey}</div>
        <div className={style.value}>
          <Tag
            size="small"
            text={
              settingKey === 'Пароль'
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

export default Item

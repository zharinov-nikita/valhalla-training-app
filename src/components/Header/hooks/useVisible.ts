import { useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../hooks/store/useAppSelector'
import { appSlice } from '../../../redux/app/app.slice'
import { navigationSlice } from '../../../redux/navigation/navigation.slice'

export function useVisible() {
  const dispatch = useAppDispatch()
  const { visible } = useAppSelector((state) => state.navigation)
  const { changeVisible } = navigationSlice.actions
  const { changeToFixedPostion, changeToScrollPostion } = appSlice.actions

  const actionChangeVisible = () => dispatch(changeVisible())

  useEffect(() => {
    if (visible) {
      dispatch(changeToFixedPostion())
    }
    if (!visible) {
      dispatch(changeToScrollPostion())
    }
  }, [visible])

  return { visible, actionChangeVisible }
}

import { useAppDispatch } from '../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../hooks/store/useAppSelector'
import { navigationSlice } from '../../../redux/navigation/navigation.slice'

export function useVisible() {
  const dispatch = useAppDispatch()
  const { visible } = useAppSelector((state) => state.navigation)
  const { changeVisible } = navigationSlice.actions
  const actionChangeVisible = () => dispatch(changeVisible())
  return { visible, actionChangeVisible }
}

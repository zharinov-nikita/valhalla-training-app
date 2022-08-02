import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/store/useAppDispatch'
import { useAppSelector } from '../../../hooks/store/useAppSelector'
import { navigationSlice } from '../../../redux/navigation/navigation.slice'

export function useVisible() {
  const { pathname } = useLocation()
  const { visible } = useAppSelector((state) => state.navigation)
  const dispatch = useAppDispatch()
  const { hide } = navigationSlice.actions

  useEffect(() => {
    dispatch(hide())
    window.scrollTo(0, 0)
  }, [pathname])

  return { visible }
}

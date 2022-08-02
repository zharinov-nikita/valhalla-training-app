import { useAppSelector } from '../../../../../hooks/store/useAppSelector'

export function useButtonText() {
  const { type } = useAppSelector((state) => state.drawer)
  const text = `Обновить ${type !== 'Фамилия' ? type?.toLowerCase() : 'фамилию'}`
  return { text }
}

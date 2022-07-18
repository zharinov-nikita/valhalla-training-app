export function useStatus() {
  const updateStatus = (currentStatus: string): string => {
    switch (currentStatus) {
      case 'Запланировано':
        return 'В работе'

      case 'В работе':
        return 'Завершено'

      case 'Завершено':
        return 'Запланировано'

      default:
        return 'Запланировано'
    }
  }

  return { updateStatus }
}

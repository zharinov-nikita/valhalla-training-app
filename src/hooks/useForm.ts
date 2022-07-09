import { useEffect, useState } from 'react'

export function useForm(option: string[]) {
  const [disabled, setDisabed] = useState<boolean>(false)

  const isEmpty = option.map((item) => {
    if (item.length === 0) {
      return true
    }
    return false
  })

  const checkEmpty = isEmpty.find((item) => {
    if (item !== false) {
      return true
    }
  })

  useEffect(() => {
    if (checkEmpty) {
      setDisabed(true)
    }
    if (!checkEmpty) {
      setDisabed(false)
    }
  }, [checkEmpty])

  return { disabled }
}

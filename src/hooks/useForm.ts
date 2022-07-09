import { useEffect, useState } from 'react'

export function useForm(option: string[]) {
  const [disabled, setDisabed] = useState<boolean>(false)

  const isEmpty = option.map((item) => {
    return item.length === 0 ? true : false
  })

  const checkEmpty = Boolean(isEmpty.find((item) => item === true))

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

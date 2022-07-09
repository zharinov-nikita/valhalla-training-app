import { useEffect, useState } from 'react'

export function useForm(option: string[]) {
  const [disabled, setDisabed] = useState<boolean>(false)
  const [values, setValues] = useState<string[]>(option)

  useEffect(() => {
    values.forEach((item) => {
      if (item.length === 0) {
        setDisabed(true)
      }
    })
  }, [])

  return { disabled }
}

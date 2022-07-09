import { useEffect, useState } from 'react'

export function useForm(option: string[]) {
  const [disabled, setDisabed] = useState<boolean>(false)

  useEffect(() => {
    option.forEach((item) => {
      if (item.length === 0) {
        setDisabed(true)
      }
      if (item.length > 0) {
        setDisabed(false)
      }
    })
  }, [...option])

  return { disabled }
}

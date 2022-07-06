import { FC } from 'react'
import Drawer from '../../../components/Drawer/Drawer'
import Input from '../../../components/Input/Input'

const PlanDrawet: FC = () => {
  return (
    <Drawer
      props={{
        children: (
          <>
            <Input
              props={{ name: 'title', placeholder: 'Название', value: '' }}
            />
          </>
        ),
      }}
    />
  )
}

export default PlanDrawet

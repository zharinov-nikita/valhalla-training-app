import { AppstoreOutlined } from '@ant-design/icons'
import MyIcon from '../../../../components/Icon/Icon'

const Icon = () => {
  return (
    <MyIcon
      props={{
        children: <AppstoreOutlined />,
        color: { type: 'transparent', value: 'green' },
        size: 'small',
      }}
    />
  )
}

export default Icon

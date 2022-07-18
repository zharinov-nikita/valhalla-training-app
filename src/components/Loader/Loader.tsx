import { LoadingOutlined } from '@ant-design/icons'
import { FC } from 'react'
import css from './Loader.module.scss'

const Loader: FC = () => {
  return <LoadingOutlined className={css.loader} />
}

export default Loader

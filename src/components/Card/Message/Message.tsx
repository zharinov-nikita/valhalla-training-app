import { FC } from 'react'
import style from './Message.module.scss'

export type MessagePropsType = {
  props: {
    text: string
  }
}

const Message: FC<MessagePropsType> = ({ props }) => {
  return <div className={style.message}>{props.text}</div>
}

export default Message

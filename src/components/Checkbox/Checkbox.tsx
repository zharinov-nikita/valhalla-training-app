import { FC, MouseEventHandler } from 'react'
import style from './Checkbox.module.scss'

export type CheckboxPropsType = {
  props: {
    checked: boolean
  }
  onClick?: MouseEventHandler
}

const Checkbox: FC<CheckboxPropsType> = ({ props, onClick }) => {
  return (
    <div
      className={style.checkbox}
      data-checked={props.checked}
      onClick={onClick}
    >
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.check}>
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.05325 10.096L1.83019 6.87291C1.47105 6.51377 0.900103 6.51377 0.540962 6.87291C0.181821 7.23206 0.181821 7.803 0.540962 8.16214L4.39943 12.0206C4.75857 12.3797 5.33872 12.3797 5.69786 12.0206L15.4591 2.26854C15.8183 1.9094 15.8183 1.33846 15.4591 0.979317C15.1 0.620176 14.529 0.620176 14.1699 0.979317L5.05325 10.096Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkbox

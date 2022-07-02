import React from 'react'
import css from './Pulse.module.scss'

const Limit = () => {
  return (
    <div className={css.limit} >
      <div className={css.top}>
        <span className={css.text}>Граница</span>
        <span className={css.icon}>Иконк</span>
      </div>
      <div className={css.buttom}>
        <span className={css.counter}>120</span>
      </div>
    </div >
  )
}


const Item = () => {
  return (
    <div>
      <Limit />
      <div className={css.title}>Низкая интенсивность</div>
      <Limit />
    </div>
  )
}

const Pulse = () => {
  return (
    <div>
      <Item />
    </div>
  )
}

export default Pulse
